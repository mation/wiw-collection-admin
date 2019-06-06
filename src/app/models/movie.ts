import {Video} from './video';

export class Movie {

  private _id:string;
  private _title:string;
  private _overview:string;
  private _original_title:string;
  private _poster_path:string;
  private _release_date:string;
  private _videos:Array<Video>;
  private _genre_ids:Array<string>;
  private _unique_genre_ids:Array<string>;

  get id(): string {
    return this._id;
  }

  set id(value: string) {
    this._id = value;
  }

  get title(): string {
    return this._title;
  }

  set title(value: string) {
    this._title = value;
  }

  get overview(): string {
    return this._overview;
  }

  set overview(value: string) {
    this._overview = value;
  }

  get original_title(): string {
    return this._original_title;
  }

  set original_title(value: string) {
    this._original_title = value;
  }

  get poster_path(): string {
    return this._poster_path;
  }

  set poster_path(value: string) {
    this._poster_path = value;
  }

  get release_date(): string {
    return this._release_date;
  }

  set release_date(value: string) {
    this._release_date = value;
  }

  get videos(): Array<Video> {
    return this._videos;
  }

  set videos(value: Array<Video>) {
    this._videos = value;
  }

  get genre_ids(): Array<string> {
    return this._genre_ids;
  }

  set genre_ids(value: Array<string>) {
    this._genre_ids = value;
  }


  get unique_genre_ids(): Array<string> {
    return this._unique_genre_ids;
  }

  set unique_genre_ids(value: Array<string>) {
    this._unique_genre_ids = value;
  }
}
