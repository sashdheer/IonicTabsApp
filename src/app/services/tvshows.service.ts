import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TvshowsService {
 // https://api.themoviedb.org/3/person/popular?api_key=<<api_key>>

 popularUrl = 'https://api.themoviedb.org/3/tv/popular';
 apiKey = '6616cc37c751ab7de9335dcc017fcecb';

 constructor(private http: HttpClient) { }

  getpopularTvShows(): Observable<any> {
    return this.http.get(`${this.popularUrl}?api_key=${this.apiKey}`)
    .pipe(
      map(results => {
     //   console.log('RAW: ', results['results']);
        return  results['results'];
      })
    );
  }
}
