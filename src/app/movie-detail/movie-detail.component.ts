import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ReferenceService } from '../reference-of-movies/reference.service';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css']
})
export class MovieDetailComponent implements OnInit {
  id: String | any;
  movie: any;
  movieImage: any;
  movieReference: any;
  constructor(private movieService : ReferenceService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
        this.movieService.getMovieDetail(this.id).subscribe(data=>{
          this.movie = data;
    });
    this.movieService.getImagesForMovie(this.id).subscribe(data=>{
      this.movieImage = data;
    });
    this.movieService.getReferenceForMovies(this.id).subscribe(data=>{
      this.movieReference = data;
      console.log(this.movieReference)
    });

  }

}
