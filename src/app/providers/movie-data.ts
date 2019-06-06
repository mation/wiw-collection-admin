import {Injectable} from '@angular/core';
import {Movie} from '../models/movie';

@Injectable()
export class MovieData {

  private _movieList: Array<Movie>

  get movieList(): Array<Movie> {
    return this._movieList;
  }

  set movieList(value: Array<Movie>) {
    this._movieList = value;
  }
}
