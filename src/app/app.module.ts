import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CurrentMoviesComponent } from './current-movies/current-movies.component';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';
import { ReferenceOfMoviesComponent } from './reference-of-movies/reference-of-movies.component';
@NgModule({
  declarations: [
    AppComponent,
    ReferenceOfMoviesComponent,
    CurrentMoviesComponent,
    MovieDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
