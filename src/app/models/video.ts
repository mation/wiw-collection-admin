export class Video {

  private _name:string;
  private _type:string;
  private _site:string;
  private _langId:string;
  private _key:string;

  get name(): string {
    return this._name;
  }

  set name(value: string) {
    this._name = value;
  }

  get type(): string {
    return this._type;
  }

  set type(value: string) {
    this._type = value;
  }

  get site(): string {
    return this._site;
  }

  set site(value: string) {
    this._site = value;
  }

  get langId(): string {
    return this._langId;
  }

  set langId(value: string) {
    this._langId = value;
  }

  get key(): string {
    return this._key;
  }

  set key(value: string) {
    this._key = value;
  }
}
