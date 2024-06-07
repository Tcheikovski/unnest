import { Unest } from "./unest";

export type HookResult = Promise<void> | void;

export interface UnestHooks {
  ready: (unest: Unest) => HookResult;
}
