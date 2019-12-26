import { Component, OnInit } from '@angular/core';
import { MovieService } from '../services/movie.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.page.html',
  styleUrls: ['./movie-details.page.scss'],
})
export class MovieDetailsPage implements OnInit {

  details = null;

  constructor(private activatedRoute: ActivatedRoute, private movieService: MovieService) { }
  ngOnInit() {
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    this.details = this.movieService.getMovieDetails(id).subscribe(result => {
      console.log('details:', result);
      this.details = result;
    });
  }
}
