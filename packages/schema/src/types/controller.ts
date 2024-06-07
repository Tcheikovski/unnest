export interface ControllerMeta {
  [key: string]: unknown;
}

export interface Controller {
  name: string;
  meta: ControllerMeta;
}
