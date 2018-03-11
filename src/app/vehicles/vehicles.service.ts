import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { Vehicle } from './vehicles.model';

@Injectable()
export class VehiclesService {

  constructor(private http: Http) { }

  getVehicles() : Observable<Vehicle[]>{
    return <Observable<Vehicle[]>>this.http
      .get('api/vehicles.json')
      .map(res => this.extractData<Vehicle[]>(res));
  }

  private extractData<T>(res: Response) {
    if (res.status < 200 || res.status >= 300) {
      throw new Error('Bad response status: ' + res.status);
    }
    let body = res.json ? res.json() : null;
    
    return <T>(body && body.data || {});
  }
}
