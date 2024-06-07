import type { InputObject } from "untyped";
import type { ConfigSchema } from "../../schema/config";

type DeepPartial<T> = T extends Function ? T : T extends Record<string, any> ? { [P in keyof T]?: DeepPartial<T[P]> } : T;

export interface UnestConfig extends DeepPartial<ConfigSchema>, InputObject {}
export interface UnestOptions extends ConfigSchema, InputObject {}
