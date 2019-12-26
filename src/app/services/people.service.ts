import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PeopleService {
  //   popularUrl = 'https://api.themoviedb.org/3/person/popular?';
  popularUrl = 'https://api.themoviedb.org/3/person/popular';
  apiKey = '6616cc37c751ab7de9335dcc017fcecb';
  // detailsUrl = https://api.themoviedb.org/3/person/{person_id}?api_key=<<api_key>>
  detailsUrl = 'https://api.themoviedb.org/3/person';

  constructor(private http: HttpClient) { }

   getpopularPeople(): Observable<any> {
     return this.http.get(`${this.popularUrl}?api_key=${this.apiKey}`)
     .pipe(
       map(results => {
         // console.log('RAW: ', results['results']);
         return  results['results'];
       })
     );
   }

   getPeopleDetails(id) {
    return this.http.get(`${this.detailsUrl}/${id}?api_key=${this.apiKey}`);
   }
 }
