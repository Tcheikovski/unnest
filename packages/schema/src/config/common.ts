import { resolve } from "pathe";
import { findWorkspaceDir } from "pkg-types";
import { defineUntypedSchema } from "untyped";

export default defineUntypedSchema({
  rootDir: {
    $resolve: (val) => (typeof val === "string" ? resolve(val) : process.cwd()),
  },

  workspaceDir: {
    $resolve: async (val: string | undefined, get): Promise<string> => {
      const rootDir = <string>await get("rootDir");
      if (val) return resolve(rootDir, val);
      return await findWorkspaceDir(rootDir).catch(() => rootDir);
    },
  },

  srcDir: {
    $resolve: async (val: string | undefined, get): Promise<string> => {
      const rootDir = <string>await get("rootDir");
      if (val) return resolve(rootDir, val);
      return rootDir;
    },
  },

  buildDir: {
    $resolve: async (val: string | undefined, get): Promise<string> => {
      const rootDir = <string>await get("rootDir");
      return resolve(rootDir, val || ".unest");
    },
  },
});
