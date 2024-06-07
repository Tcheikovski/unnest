import { defineCommand } from "citty";
import pkg from "../package.json" assert { type: "json" };

export const main = defineCommand({
  meta: {
    name: pkg.name,
    version: pkg.version,
    // description: pkg.description,
  },
  subCommands: {},
});
