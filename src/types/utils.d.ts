declare type ValueOf<T> = T[keyof T];

declare type DeepPartial<T> = T extends FunctionConstructor
  ? T
  : T extends Record<string, any>
  ? { [P in keyof T]?: DeepPartial<T[P]> }
  : T;

declare type UnPromise<T> = T extends PromiseLike<infer U> ? U : T;

declare type DateString = string;
