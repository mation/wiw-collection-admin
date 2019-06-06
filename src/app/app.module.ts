import {BrowserModule} from '@angular/platform-browser';
import {APP_INITIALIZER, NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {FlexLayoutModule} from '@angular/flex-layout';
import {HttpClientModule} from '@angular/common/http';
import {AppConfigService} from './services/config/app-config.service';
import {
  MatButtonModule,
  MatCardModule,
  MatChipsModule,
  MatDialogModule,
  MatExpansionModule,
  MatIconModule,
  MatInputModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatSelectModule,
  MatToolbarModule
} from '@angular/material';
import {SelectorComponent} from './components/selector/selector.component';
import {LangConfigService} from './services/config/lang-config.service';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule} from '@angular/forms';
import {MovieListComponent} from './components/movie-list/movie-list.component';
import {MovieData} from './providers/movie-data';
import {SafePipe} from './safe-pipe';
import {VideoDialogComponent} from './components/video-dialog/video-dialog.component';
import {GenresService} from './services/wiw/genres.service';
import { EditorDialogComponent } from './components/editor-dialog/editor-dialog.component';
import { AddMovieAlertDialogComponent } from './components/add-movie-alert-dialog/add-movie-alert-dialog.component';
import { DeleteMovieAlertDialogComponent } from './components/delete-movie-alert-dialog/delete-movie-alert-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    SelectorComponent,
    MovieListComponent,
    VideoDialogComponent,
    SafePipe,
    EditorDialogComponent,
    AddMovieAlertDialogComponent,
    DeleteMovieAlertDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FlexLayoutModule,
    MatButtonModule,
    MatIconModule,
    HttpClientModule,
    MatCardModule,
    MatSelectModule,
    MatInputModule,
    MatToolbarModule,
    BrowserAnimationsModule,
    FormsModule,
    MatProgressSpinnerModule,
    MatProgressBarModule,
    MatExpansionModule,
    MatChipsModule,
    MatDialogModule
  ],
  providers: [MovieData,
    {
      provide : APP_INITIALIZER,
      multi: true,
      deps: [AppConfigService],
      useFactory: (appConfigService: AppConfigService) => {
        return () => {
          return appConfigService.loadAppConfig();
        };
      }
    },
    {
      provide: APP_INITIALIZER,
      multi: true,
      deps: [LangConfigService],
      useFactory: (langConfigService: LangConfigService) => {
        return () => {
          return langConfigService.loadLangConfig();
        };
      }
    },
    {
      provide : APP_INITIALIZER,
      multi: true,
      deps: [GenresService],
      useFactory: (genresService: GenresService) => {
        return () => {
          return genresService.loadGenres();
        };
      }
    }
  ],
  entryComponents: [MovieListComponent, VideoDialogComponent,EditorDialogComponent,AddMovieAlertDialogComponent,DeleteMovieAlertDialogComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
