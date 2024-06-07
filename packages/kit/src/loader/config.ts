import { applyDefaults } from "untyped";
import { loadConfig, type LoadConfigOptions } from "c12";
import { defu } from "defu";
import { UnestConfigSchema, type UnestConfig, type UnestOptions } from "@unest/schema";

export interface LoadUnestConfigOptions extends LoadConfigOptions<UnestConfig> {}

export async function loadUnestConfig(options: LoadUnestConfigOptions): Promise<UnestOptions> {
  options.overrides = defu(options.overrides, {});

  // (globalThis as any).defineNuxtConfig = (c: any) => c

  const result = await loadConfig<UnestConfig>({
    name: "unest",
    configFile: "unest.config",
    rcFile: ".unestrc",
    dotenv: true,
    globalRc: true,
    ...options,
  });

  const unestConfig = result.config ?? {};
  unestConfig.rootDir ??= result.cwd;

  return <UnestOptions>await applyDefaults(UnestConfigSchema, unestConfig);
}
