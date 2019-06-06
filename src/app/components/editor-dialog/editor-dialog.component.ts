import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef, MatOptionSelectionChange} from '@angular/material';
import {Movie} from '../../models/movie';
import {DomSanitizer} from '@angular/platform-browser';
import {GenresService} from '../../services/wiw/genres.service';

@Component({
  selector: 'app-editor-dialog',
  templateUrl: './editor-dialog.component.html',
  styleUrls: ['./editor-dialog.component.css']
})
export class EditorDialogComponent implements OnInit {

  private _selectable = true;
  private _removable = true;

  constructor(public dialogRef: MatDialogRef<EditorDialogComponent>,
              public sanitizer: DomSanitizer,
              @Inject(MAT_DIALOG_DATA) public movie: Movie,
              public genresService:GenresService) {

  }

  public add(key: string){

    if( !this.movie.unique_genre_ids ){
      this.movie.unique_genre_ids = new Array<string>();
    }

    const index = this.movie.unique_genre_ids.indexOf(key);

    if ( key && key !='' && index < 0 ) {

      this.movie.unique_genre_ids.push(key);
    }
  }

  public remove(key : string): void {

    if( this.movie.unique_genre_ids ) {

      const index = this.movie.unique_genre_ids.indexOf(key);

      if (index >= 0) {
        this.movie.unique_genre_ids.splice(index, 1);
      }
    }
  }

  public getGenreValue(key: string):string {

    return this.genresService.uniqueGenres[key];
  }

  private onGenreSelectionChange(event:MatOptionSelectionChange){
    if(event.isUserInput){
      this.add(event.source.value);
    }
  }

  ngOnInit() {
  }
}
