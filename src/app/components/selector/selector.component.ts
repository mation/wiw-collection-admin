import { Component, OnInit } from '@angular/core';
import {LangConfigService} from '../../services/config/lang-config.service';
import {AppConfigService} from '../../services/config/app-config.service';
import {MovieService} from '../../services/wiw/movie.service';
import {animate, state, style, transition, trigger} from '@angular/animations';
import {Router} from '@angular/router';
import {Movie} from '../../models/movie';
import {MovieData} from '../../providers/movie-data';

@Component({
  selector: 'app-selector',
  templateUrl: './selector.component.html',
  styleUrls: ['./selector.component.css'],
  animations:[
    trigger('fadeInOut', [
      state('void', style({
        opacity: 0
      })),
      transition('void <=> *', animate(400)),
    ])
  ]
})
export class SelectorComponent implements OnInit {

  private static VOID_STATE = 'void';

  _isCollapsed: boolean = true;

  private _state:string;

  private _languages: string[];
  private _pages: number[];

  private _selectedLang: string;
  private _selectedPage: number;

  private _movieTitle: string;

  constructor( private langConfigService: LangConfigService, private appConfigService: AppConfigService, private movieService:MovieService, private route: Router, private movieData:MovieData) {

  }

  ngOnInit() {

    this.initLang();
    this.initPage();
  }

  private initLang(){

    this._languages = this.langConfigService.languages;
    this._selectedLang = this._languages[1];
  }

  private initPage() {
    let totalPages:number = this.appConfigService.config.totalPages;
    this._pages = Array.from({length: totalPages}, (v, k) => k+1);

    this._selectedPage =1;
  }

  private changeLang(value: string) {
    this._selectedLang = value;
  }

  private changePage(value: number) {
    this._selectedPage = value;
  }

  getMovieList() {

    this._state = SelectorComponent.VOID_STATE;

    this.movieService.getMovies(this._selectedPage, this._selectedLang).subscribe(data => {
        this.gotoList(data.results);
      });
  }

  findMovie() {

    this._state = SelectorComponent.VOID_STATE;

    this.movieService.findMovie(this._movieTitle, this._selectedLang).subscribe(data => {
      this.gotoList(data.results);
    });
  }

  animEnd(event:any) {

    this._isCollapsed = !event.toState;
  }

  gotoList(movie:Array<Movie>){

    this.movieData.movieList = movie
    this.route.navigate(['list']);

  }
}
