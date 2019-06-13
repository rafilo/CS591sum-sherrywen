import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WeathersComponent }      from '../weathers/weathers.component';
import { DashboardComponent }   from '../dashboard/dashboard.component';
import { WeatherDetailComponent } from '../weather-detail/weather-detail.component';
const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'detail/:id', component: WeatherDetailComponent},
  { path: 'dashboard', component: DashboardComponent },
  { path: 'weathers', component: WeathersComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
