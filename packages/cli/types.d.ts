/* eslint-disable no-var */

declare global {
  var __unest_cli__:
    | {
        entry: string;
        startTime: number;
      }
    | undefined;
}

export {};
