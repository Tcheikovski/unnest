import { Abstract } from "../abstract.interface";
import { Type } from "../type.interface";

export type InjectionToken<T = any> = string | symbol | Type<T> | Abstract<T> | Function;
