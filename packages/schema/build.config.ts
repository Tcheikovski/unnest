import { defineBuildConfig } from "unbuild";

export default defineBuildConfig({
  declaration: true,
  entries: [
    {
      input: "src/config/index",
      outDir: "schema",
      name: "config",
      builder: "untyped",
      defaults: {
        srcDir: "/<srcDir>/",
        workspaceDir: "/<workspaceDir>/",
        rootDir: "/<rootDir>/",
      },
    },
    "src/index",
  ],
});
