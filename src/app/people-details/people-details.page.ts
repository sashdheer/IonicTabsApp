import { Component, OnInit } from '@angular/core';
import { PeopleService } from '../services/people.service';
import { ActivatedRoute } from '@angular/router';
import { PeoplePage } from '../People/people.page';


@Component({
  selector: 'app-people-details',
  templateUrl: './people-details.page.html',
  styleUrls: ['./people-details.page.scss'],
})
export class PeopleDetailsPage implements OnInit {

  peopleDetails = null;
  constructor(private activatedRoute: ActivatedRoute, private peopleService: PeopleService) { }

  ngOnInit() {
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    this.peopleDetails = this.peopleService.getPeopleDetails(id).subscribe(result => {
        console.log('Details:', result);
        this.peopleDetails = result;
    });
  }

}
