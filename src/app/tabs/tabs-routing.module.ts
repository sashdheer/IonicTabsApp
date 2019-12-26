import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'movies',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../Movies/movies.module').then(m => m.MoviesPageModule)
          },
          {
            path: ':id',
            loadChildren: () =>
                import('../MovieDetails/movie-details.module').then( m => m.MovieDetailsPageModule)
          },
       ]
      },
      {
        path: 'tvshows',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../TvShows/tvShows.module').then(m => m.TvShowsPageModule)
          }
        ]
      },
      {
        path: 'people',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../People/people.module').then(m => m.PeoplePageModule)
          },
          {
            path: ':id',
            loadChildren: () =>
                import('../people-details/people-details.module').then( m => m.PeopleDetailsPageModule)
          },
        ]
      },
      {
        path: '',
        redirectTo: '/tabs/movies',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/movies',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
