import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class MovieService {

  // https://developers.themoviedb.org/3/movies/get-popular-movies
  // Example usage : https://api.themoviedb.org/3/movie/popular?api_key=<<api_key>>
  popularUrl = 'https://api.themoviedb.org/3/movie/popular';
  // Example usage : https://api.themoviedb.org/3/movie/{movie_id}?api_key=<<api_key>>
  detailsUrl = 'https://api.themoviedb.org/3/movie';
  apiKey = '6616cc37c751ab7de9335dcc017fcecb';

  constructor(private http: HttpClient) { }

  getpopularMovies(): Observable<any> {
    return this.http.get(`${this.popularUrl}?api_key=${this.apiKey}`)
    .pipe(
      map(results => {
      //   console.log('RAW: ', results['results']);
        return  results['results'];
      })
    );
  }

  getMovieDetails(id) {
    return this.http.get(`${this.detailsUrl}/${id}?api_key=${this.apiKey}`);
  }

}
