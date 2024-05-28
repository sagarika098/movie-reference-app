import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CurrentMoviesComponent } from './current-movies/current-movies.component';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';
import { ReferenceOfMoviesComponent } from './reference-of-movies/reference-of-movies.component';

const routes: Routes = [
  { path: '', redirectTo: '/upcoming-movies', pathMatch: 'full' },
  { path: 'upcoming-movies', component: ReferenceOfMoviesComponent },
  { path: 'current-movies', component: CurrentMoviesComponent },
  { path: 'movie/:id', component: MovieDetailComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
