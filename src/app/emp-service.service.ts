import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

import 'rxjs/Rx';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
// import 'rxjs/add/observable/throw';
 import 'rxjs/add/operator/map';
// import 'rxjs/operator/delay';
// import 'rxjs/operator/mergeMap';
// import 'rxjs/operator/switchMap';



//import { Observable } from 'rxjs';
export interface empObj {
  obj : Object
}

@Injectable({
  providedIn: 'root'
})
export class EmpServiceService {

  private _url = "./assets/data/empdata.json";

  constructor(private http: HttpClient) { }

  getEmployee():Observable<empObj>{
    return this.http.get<empObj>(this._url).catch(this.errorHandler);
  }
  errorHandler(error: HttpErrorResponse) {
      return Observable.throw(error.message || "Server Error");
  }
} 
