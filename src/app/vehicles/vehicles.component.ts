import { Component, OnInit } from '@angular/core';

import { VehiclesService } from './vehicles.service';
import { Vehicle } from './vehicles.model';

@Component({
  selector: 'vehicles',
  templateUrl: './vehicles.component.html',
  styleUrls: ['./vehicles.component.css']
})
export class VehiclesComponent implements OnInit {

  vehicles: Vehicle[];

  constructor(private _service: VehiclesService) { }

  ngOnInit() {
    this.getVehicles();
  }

  private getVehicles() {
    this.vehicles = [];
    this._service.getVehicles()
      .subscribe(res => {
        this.vehicles = res;
      },
        err => {
          console.log('getVehicles', err);
        });
  }
}
