import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LangConfigService {

  private static LANG_CONFIG_FILE_PATH: string = 'assets/lang.json';

  private _languages:any;

  constructor( private httpClient: HttpClient) { }

  public loadLangConfig(){

    return this.httpClient.get(LangConfigService.LANG_CONFIG_FILE_PATH)
      .toPromise()
      .then(data => { this._languages = data; });
  }

  get languages(): any {
    return this._languages.lang;
  }
}
