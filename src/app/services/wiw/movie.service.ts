import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';
import {AppConfigService} from '../config/app-config.service';
import {Movie} from '../../models/movie';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  private static PAGE_KEY:string = 'page';
  private static LANGUAGE_KEY:string = 'language';
  private static QUERY_KEY:string = 'query';

  _url: string;
  _getMoviePath: string;
  _findMoviesPath: string;
  _addMoviePath: string;

  _debugMode: boolean = false;
  _debugFilePath: string;

  constructor( private httpClient: HttpClient, private appConfigService: AppConfigService) {

    this._url = this.appConfigService.config.collectionController.url;
    this._getMoviePath = this.appConfigService.config.collectionController.getMoviesPath;
    this._findMoviesPath = this.appConfigService.config.collectionController.findMoviesPath;
    this._addMoviePath = this.appConfigService.config.collectionController.addMoviePath;
    this._debugMode = this.appConfigService.config.debugMode;
    this._debugFilePath = this.appConfigService.config.debugFilePath;

  }

  public getMovies( page: number, language:string ): Observable<any> {

    let params:HttpParams = new HttpParams()
      .set( MovieService.PAGE_KEY, page.toString() )
      .set( MovieService.LANGUAGE_KEY, language );

    return this.getMoviesData(this._url + this._getMoviePath, params);

  }

  public findMovie( title: string, language:string ):Observable<any> {

    let params: HttpParams = new HttpParams()
      .set( MovieService.QUERY_KEY, title )
      .set( MovieService.LANGUAGE_KEY, language) ;

    return this.getMoviesData(this._url + this._findMoviesPath, params);
  }

  public addMovie(movie: Movie ):Observable<any>{

    return this.httpClient.post(this._url + this._addMoviePath, movie);
  }

  private getMoviesData( url:string, params:HttpParams):Observable<any>{
    return this.httpClient.get(this._debugMode ? this._debugFilePath : url , {params: params});
  }
}
