export interface Abstract<T = any> extends Function {
  prototype: T;
}
