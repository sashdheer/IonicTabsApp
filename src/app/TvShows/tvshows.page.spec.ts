import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TvShowspage } from './TvShows.page';

describe('TvShowspage', () => {
  let component: TvShowspage;
  let fixture: ComponentFixture<TvShowspage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TvShowspage],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TvShowspage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
