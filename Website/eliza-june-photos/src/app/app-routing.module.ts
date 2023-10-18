import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './Pages/home-page/home-page.component';
import { ServicesPageComponent } from './Pages/services-page/services-page.component';
import { BookingPageComponent } from './Pages/booking-page/booking-page.component';
import { PortfolioPageComponent } from './Pages/portfolio-page/portfolio-page.component';

const routes: Routes = [
  {path: 'home', component: HomePageComponent},
  {path: 'services', component: ServicesPageComponent},
  {path: 'booking', component: BookingPageComponent},
  {path: 'portfolio', component: PortfolioPageComponent},
  {path: '', redirectTo: '/home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
