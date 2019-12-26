import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { PeopleDetailsPage } from './people-details.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild([{ path: '', component: PeopleDetailsPage }])
  ],
  declarations: [PeopleDetailsPage]
})
export class PeopleDetailsPageModule {}
