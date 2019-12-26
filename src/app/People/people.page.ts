import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { PeopleService } from '../services/people.service';

@Component({
  selector: 'app-people',
  templateUrl: 'people.page.html',
  styleUrls: ['people.page.scss']
})
export class PeoplePage implements OnInit {
  results: Observable<any>;

   constructor(private peopleService: PeopleService) {}
   ngOnInit() {
     this.results = this.peopleService.getpopularPeople();
   }
 }
