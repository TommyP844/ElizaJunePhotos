import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './Pages/home-page/home-page.component';
import { HomePageMobileComponent } from './Pages/home-page-mobile/home-page-mobile.component';
import { HeaderComponent } from './Shared/header/header.component';
import { FooterComponent } from './Shared/footer/footer.component';
import { ContentBlockComponent } from './Shared/content-block/content-block.component';
import { ServicesPageComponent } from './Pages/services-page/services-page.component';
import { ServicesPageMobileComponent } from './Pages/services-page-mobile/services-page-mobile.component';
import { BookingPageComponent } from './Pages/booking-page/booking-page.component';
import { BookingPageMobileComponent } from './Pages/booking-page-mobile/booking-page-mobile.component';
import { HttpClientModule } from '@angular/common/http';
import { PortfolioPageComponent } from './Pages/portfolio-page/portfolio-page.component';
import { PortfolioPageMobileComponent } from './Pages/portfolio-page-mobile/portfolio-page-mobile.component';
import { MenuBarComponent } from './Shared/menu-bar/menu-bar.component';
import { ScrollingImagesComponent } from './Shared/scrolling-images/scrolling-images.component';
import { ContentCardComponent } from './Shared/content-card/content-card.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    HomePageMobileComponent,
    HeaderComponent,
    FooterComponent,
    ContentBlockComponent,
    ServicesPageComponent,
    ServicesPageMobileComponent,
    BookingPageComponent,
    BookingPageMobileComponent,
    PortfolioPageComponent,
    PortfolioPageMobileComponent,
    MenuBarComponent,
    ScrollingImagesComponent,
    ContentCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
