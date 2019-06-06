import {Component, OnInit} from '@angular/core';
import {MovieData} from '../../providers/movie-data';
import {Movie} from '../../models/movie';
import {animate, state, style, transition, trigger} from '@angular/animations';
import {Video} from '../../models/video';
import {MatDialog} from '@angular/material';
import {VideoDialogComponent} from '../video-dialog/video-dialog.component';
import {MovieService} from '../../services/wiw/movie.service';
import {GenresService} from '../../services/wiw/genres.service';
import {EditorDialogComponent} from '../editor-dialog/editor-dialog.component';
import {AppConfigService} from '../../services/config/app-config.service';
import {AddMovieAlertDialogComponent} from '../add-movie-alert-dialog/add-movie-alert-dialog.component';
import {DeleteMovieAlertDialogComponent} from '../delete-movie-alert-dialog/delete-movie-alert-dialog.component';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css'],
  animations: [
  trigger('EnterLeave', [  state('flyIn', style({ transform: 'translateX(0)' })),  transition(':enter', [    style({ transform: 'translateX(-100%)' }),    animate('0.2s 100ms ease-in')  ]),  transition(':leave', [    animate('0.1s ease-out', style({ transform: 'translateX(100%)' }))  ])])
  ]
})
export class MovieListComponent implements OnInit {


  _movieList:Array<Movie>;
  _imgUrl:string;

  constructor( private movieData:MovieData,
               private movieService:MovieService,
               private genresService:GenresService,
               private appConfigService: AppConfigService,
               public dialog: MatDialog ) {

    this._movieList = movieData.movieList;
    this._imgUrl = appConfigService.config.tmdb.imageUrl;
  }

  public saveMovie(movie: Movie) {

    if(movie && movie.unique_genre_ids && movie.unique_genre_ids.length > 0) {

      this.movieService.addMovie(movie).subscribe(() => {
        this.movieData.movieList.splice(this.movieData.movieList.indexOf(movie), 1)
      });
    }
    else {
      this.showAddAlert();
    }

  }

  public deleteMovie(movie: Movie) {

    if(movie && !movie.unique_genre_ids || movie.unique_genre_ids.length == 0) {

      const index = this.movieData.movieList.indexOf(movie);

      if (index >= 0) {
        this.movieData.movieList.splice(this.movieData.movieList.indexOf(movie), 1);
      }
    }
    else{
      this.showDeleteAlert();
    }
  }

  private openEditor(movie: Movie) {

    this.dialog.open(EditorDialogComponent,{data:movie})
  }

  private openVideo(video: Video) {

    this.dialog.open(VideoDialogComponent,{data:video})
  }

  private showAddAlert(){
    this.dialog.open(AddMovieAlertDialogComponent)
  }

  private showDeleteAlert(){
    this.dialog.open(DeleteMovieAlertDialogComponent)
  }

  private getGenre(key: string):string {

    return this.genresService.genres[key];
  }

  private getUniqueGenre(key: string):string {

    return this.genresService.uniqueGenres[key];

  }

  ngOnInit() {
  }
}
