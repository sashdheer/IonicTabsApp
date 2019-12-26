import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { TvshowsService } from '../services/tvshows.service';

@Component({
  selector: 'app-tvshows',
  templateUrl: 'tvshows.page.html',
  styleUrls: ['tvshows.page.scss']
})
export class TvShowspage implements OnInit {
  results: Observable<any>;
 
   constructor(private tvService: TvshowsService) {}
   ngOnInit() {
     this.results = this.tvService.getpopularTvShows();
   }
 }

