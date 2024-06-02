import { Type } from "@unest/common";

export class Module {
  private readonly _id: string;
  private _initOnPreview = false;
  private _isGlobal = false;
  private declare _token: string;

  constructor(private readonly _metatype: Type<any>) {
    // this.addCoreProviders();
    this._id = this.generateUuid();
  }

  get id(): string {
    return this._id;
  }

  get token(): string {
    return this._token;
  }

  set token(token: string) {
    this._token = token;
  }

  get name() {
    return this.metatype.name;
  }

  get isGlobal() {
    return this._isGlobal;
  }

  set isGlobal(global: boolean) {
    this._isGlobal = global;
  }

  get initOnPreview() {
    return this._initOnPreview;
  }

  set initOnPreview(initOnPreview: boolean) {
    this._initOnPreview = initOnPreview;
  }

  get metatype(): Type<any> {
    return this._metatype;
  }

  private generateUuid(): string {
    return "uuid";
  }
}
