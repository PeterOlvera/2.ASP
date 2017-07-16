import { RouterModule, Routes } from '@angular/router';

import {HomeComponent} from './components/home/home.component';
import {AboutsComponent} from './components/about/about.component';
import {HeroesComponent} from './components/heroes/heroes.component';

const APP_ROUTES: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutsComponent },
  { path: 'heroes', component: HeroesComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);