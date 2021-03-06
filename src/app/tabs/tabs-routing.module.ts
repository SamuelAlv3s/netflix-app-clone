import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children: [
      {
        path: 'home',
        loadChildren: () =>
          import('../pages/home/home.module').then((m) => m.HomePageModule),
      },
      {
        path: 'home/account',
        loadChildren: () =>
          import('../pages/account/account.module').then(
            (m) => m.AccountPageModule
          ),
      },
      {
        path: 'coming-soon',
        loadChildren: () =>
          import('../pages/coming-soon/coming-soon.module').then(
            (m) => m.ComingSoonPageModule
          ),
      },
      {
        path: 'search',
        loadChildren: () =>
          import('../pages/search/search.module').then(
            (m) => m.SearchPageModule
          ),
      },
      {
        path: 'downloads',
        loadChildren: () =>
          import('../pages/downloads/downloads.module').then(
            (m) => m.DownloadsPageModule
          ),
      },
      {
        path: 'home/details/:id',
        loadChildren: () =>
          import('../pages/details/details.module').then(
            (m) => m.DetailsPageModule
          ),
      },
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full',
      },
    ],
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {}
