export interface ConfigSchema {
 /** @default "/<rootDir>" */
 rootDir: string,

 /** @default "/<workspaceDir>" */
 workspaceDir: string,

 /** @default "/<srcDir>" */
 srcDir: string,

 /** @default "/<rootDir>/.unest" */
 buildDir: string,
}