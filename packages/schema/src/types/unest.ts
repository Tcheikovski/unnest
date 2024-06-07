import { Hookable } from "hookable";
import { UnestOptions } from "./config";
import { Controller } from "./controller";
import { UnestHooks } from "./hooks";

export interface UnestApp {
  controllers: Controller[];
}

export interface Unest {
  options: UnestOptions;
  hooks: Hookable<UnestHooks>;
  hook: Unest["hooks"]["hook"];
  callHook: Unest["hooks"]["callHook"];
  addHooks: Unest["hooks"]["addHooks"];

  ready: () => Promise<void>;
  close: () => Promise<void>;

  apps: Record<string, UnestApp>;
}
