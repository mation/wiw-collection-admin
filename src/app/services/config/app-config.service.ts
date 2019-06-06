import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AppConfigService {

  private static CONFIG_FILE_PATH: string = 'assets/config.json';

  private _config: any;

  constructor( private httpClient: HttpClient) {

  }

  public loadAppConfig(){

    return this.httpClient.get(AppConfigService.CONFIG_FILE_PATH)
      .toPromise()
      .then(data => { this._config = data; });
  }

  get config(): any {
    return this._config;
  }
}
