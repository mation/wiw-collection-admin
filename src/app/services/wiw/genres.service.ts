import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GenresService {

  private static GENRES_FILE_PATH: string = 'assets/genre.json';

  private _genres: any;

  constructor( private httpClient: HttpClient) { }

  public loadGenres(){

    this.httpClient.get(GenresService.GENRES_FILE_PATH)
      .toPromise()
      .then(data => {this._genres = data});
  }

  public get genres(): any {

    return this._genres ? this._genres.genres : {};
  }

  public get uniqueGenres():any {

    return this._genres ? this._genres.uniqueGenres : {};
  }
}
