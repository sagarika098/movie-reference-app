import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ReferenceService } from './reference.service';

@Component({
  selector: 'app-reference-of-movies',
  templateUrl: './reference-of-movies.component.html',
  styleUrls: ['./reference-of-movies.component.css']
})
export class ReferenceOfMoviesComponent implements OnInit {

  constructor(private movieService: ReferenceService,private router: Router) { }
  upcomingMovies: any[] = [];
  movieDetail: any;
  
  ngOnInit(): void {
    this.movieService.getUpcomingMovies().subscribe(
      (data) => {
        this.upcomingMovies = data.results;
        console.log(this.upcomingMovies);
      },
      (error) => {
        console.error('Error fetching upcoming movies', error);
      }
    );
  }
  onCardClick(movie: any) {
    this.router.navigate(['/movie', movie.id]);
  }
}
