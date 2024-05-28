import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ReferenceService {
  private apiUrl = 'https://api.themoviedb.org/3/movie/upcoming';
  private currentApiUrl = 'https://api.themoviedb.org/3/movie/now_playing';
  private movieDetailApi = 'https://api.themoviedb.org/3/movie/';
  private apiKey = environment.api_key;
  constructor(private http: HttpClient) {
   }
   getUpcomingMovies(): Observable<any> {
    return this.http.get(`${this.apiUrl}?api_key=${this.apiKey}`);
  }
  getCurrentMovies():Observable<any>{
    return this.http.get(`${this.currentApiUrl}?api_key=${this.apiKey}`)
  }
  getMovieDetail(movieID : String):Observable<any>{
    return this.http.get(`${this.movieDetailApi}${movieID}?api_key=${this.apiKey}`)
  }
  getImagesForMovie(movieID : String):Observable<any>{
    return this.http.get(`${this.movieDetailApi}${movieID}/images?api_key=${this.apiKey}`)
  }
  getReferenceForMovies(movieID : String):Observable<any>{
    return this.http.get(`${this.movieDetailApi}${movieID}/recommendations?api_key=${this.apiKey}`)
  }
}
