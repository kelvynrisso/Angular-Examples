import { Component, OnInit } from '@angular/core';
import { Vehicle } from '../vehicles.model';
import { ActivatedRoute } from '@angular/router';
import { VehiclesService } from '../vehicles.service';

@Component({
  selector: 'app-vehicles-detail',
  templateUrl: './vehicles-detail.component.html',
  styleUrls: ['./vehicles-detail.component.css']
})
export class VehiclesDetailComponent implements OnInit {

  id: number;
  vehicle: Vehicle;

  constructor(private _route: ActivatedRoute, private _service: VehiclesService) {
    this.vehicle = new Vehicle();
  }

  ngOnInit() {
    this.id = +this._route.snapshot.params['id'];
    this._service.getVehicle(this.id)
      .subscribe(res => this.vehicle = res);
  }

}
