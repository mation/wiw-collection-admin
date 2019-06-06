import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {SelectorComponent} from './components/selector/selector.component';
import {MovieListComponent} from './components/movie-list/movie-list.component';

const routes: Routes = [
  {path:'', redirectTo:'/index', pathMatch:'full'},
  {path:'index', component: SelectorComponent},
  {path:'list', component: MovieListComponent},
  {path:'**', redirectTo:'/index', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
