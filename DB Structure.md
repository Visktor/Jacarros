#### Client
- `ClientID`: Unique identifier for the user.  => **UUID**
- `FullName`:  Full Name of the user. => **VARCHAR(200)**
- `Email`: Email of the user. => **VARCHAR(100)**
- `ContactNumber`: Contact number of the user. => **VARCHAR(18)**
- `Address`: Address of the user. => **TEXT**
#### Profile
*Determines access level throughout the application, except for admin employees.
- `ProfileID`: Unique identifier for the profile. => **UUID**
- `Description`: Profile's description. => **TEXT**
#### Users
*Mostly employees, sometimes maintenance team, sometimes the owner and associates themselves.
- `UserID`: Unique identifier for the user. => **UUID**
- `AdminFlag`: Flag to indicate whether the user is of administrator access level. => **BOOLEAN**
- `Email`:  User's email. => **VARCHAR(100)**
- `StoreID`:  The store associated to this user. Foreign key to `StoreID` in the `Store` table . => **UUID**
- `ProfileID`:  The profile associated to the user. Foreign key to `ProfileID` in the `Profile` table . => **UUID**
#### Stores
- `StoreID:` Unique indentifier for the store. => **UUID**
- `CNPJ:` Unique identifier for CNPJ. => **VARCHAR(18)**
- `Email:` Optional field containing an email for contacting the store. => **VARCHAR(100)**
- `Address:` Store's address. => **TEXT**
#### Cars
- `CarID`: Unique identifier for the car. => **UUID**
- `StoreID`:  The store the car is currently available at. Foreign key to `StoreID` in the `Store` table . => **UUID**
- `Brand`: Brand of the car. => **VARCHAR(20)**
- `Model`: Model of the car. => **VARCHAR(20)**
- `Year`: Year of manufacture. => **DATE**
- `Color`: Color of the car. => **VARCHAR(20)**
- `PricePerDay`: Rental price per day. => **DOUBLE PRECISION**
- `PricePerMonth`: Rental price per month. => **DOUBLE PRECISION**
- `IsAvailable`: A flag to indicate if the car is currently available for rent. => **BOOLEAN**
#### Rentals
*Charging fees will be based upon `ActualEndDate` - `AgreedStartDate`. That is the total time the client reserved the car.*
- `RentalID`: Unique identifier for the rental. => **UUID**
- `CarID`: The car that is being rented. Foreign key to `CarID` in the `Cars` table. => **UUID**
- `UserID`: The user that is tending to the client. Foreign key to `UserID` in the `Users` table. => **UUID**
- `ClientID`: The client who is renting the car. Foreign key to `ClientID` in the `Client` table. => **UUID**
- `AgreedStartDate`: The date the client agreed the rental would start. =>  **DATE**
- `AgreedEndDate`: The date the client agreed the rental would end. => **DATE**
- `ActualStartDate`: The date when the rental actually started. =>  **DATE**
- `ActualEndDate`: The date when the rental actually ended. => **DATE**
- `TotalAmount`: The total amount for the rental. => **DOUBLE PRECISION**
#### Payments 
- `PaymentID`: Unique identifier for the payment. => **UUID**
- `ClientID`: The client who's made the payment. Foreign key to `ClientID` in the `Client` table. => **UUID**
- `RentalID`: The rental for which the payment was made. Foreign key to `RentalID` in the `Rentals` table. **UUID**
- `Amount`: The amount of the payment. => **DOUBLE PRECISION**
- `PaymentDate`: The date when the payment was made. => **DATE**

#### Payments_Rentals
*Relation table between payments and rentals. A rental may be paid with multiple payments at different dates and with varied forms of payment. A payment may also refer to multiple rentals at the same time.*
- `PaymentID` => **UUID**
- `RentalID`  => **UUID**

#### Incidents
- `IncidentID`: Unique identifier for the incident. => **UUID**
- `RentalID`: The rental the incident happened on. Foreign key to `RentalID` in the `Rentals` table. **UUID**
- `Description:` Incident's description => **TEXT**
- `Cost`: The cost associated with the incident. => **DOUBLE PRECISION**

![[PrimeCars 2023-10-07 11.52.17.excalidraw]]