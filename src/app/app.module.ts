import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from "@angular/router";

import { AppComponent } from './app.component';
import { VehiclesComponent } from './vehicles/vehicles.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { VehiclesService } from './vehicles/vehicles.service';
import { Http, HttpModule } from '@angular/http';
import { VehiclesDetailComponent } from './vehicles/vehicles-detail/vehicles-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    VehiclesComponent,
    VehiclesDetailComponent
  ],
  imports: [
    BrowserModule,
    MatToolbarModule,
    MatListModule,
    MatButtonModule,
    HttpModule,
    RouterModule.forRoot([
      { path: '', redirectTo: 'vehicles', pathMatch: 'full' },
      { path: 'vehicles', component: VehiclesComponent },
      { path: 'vehicles/detail/:id', component: VehiclesDetailComponent },
    ], { useHash: false })
  ],
  providers: [
    VehiclesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
