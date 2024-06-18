export type Unpacked<T> = T extends (infer U)[]
  ? U
  : T extends (...args: any) => infer R
  ? R
  : T extends Promise<infer P>
  ? P
  : T;
