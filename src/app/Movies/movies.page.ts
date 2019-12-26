import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { MovieService } from '../services/movie.service';

@Component({
  selector: 'app-movies',
  templateUrl: 'movies.page.html',
  styleUrls: ['movies.page.scss']
})
export class MoviesPage implements OnInit {
 results: Observable<any>;

  constructor(private movieService: MovieService) {}
  ngOnInit() {
    this.results = this.movieService.getpopularMovies();
  }
}
