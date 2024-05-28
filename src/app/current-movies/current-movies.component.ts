import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ReferenceService } from '../reference-of-movies/reference.service';

@Component({
  selector: 'app-current-movies',
  templateUrl: './current-movies.component.html',
  styleUrls: ['./current-movies.component.css']
})
export class CurrentMoviesComponent implements OnInit {
  currentMovies: any[] = [];
  constructor(private movieService: ReferenceService,private router: Router) { }

  ngOnInit(): void {
    this.movieService.getCurrentMovies().subscribe((dataOfCurrentMovies)=>{
      this.currentMovies = dataOfCurrentMovies.results;
      console.log(this.currentMovies);
    })
  }
  onCardClick(movie: any) {
    this.router.navigate(['/movie', movie.id]);
  }
}
