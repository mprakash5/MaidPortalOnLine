import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';

import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { ModalModule } from 'ngx-bootstrap/modal';
import { AdministrationComponent } from './administration/administration.component';

import { Observable, Subject, ReplaySubject } from 'rxjs';

import { UICarouselModule } from "ui-carousel";


export class AppBootstrapModule { }

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    AdministrationComponent
  ],
  imports: [
    BrowserModule,
    BsDropdownModule.forRoot(),
    TooltipModule.forRoot(),
    ModalModule.forRoot(),
    AppRoutingModule,
    UICarouselModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
