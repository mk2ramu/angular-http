import { Component, OnInit } from '@angular/core';
import { EmpServiceService } from '../emp-service.service'

@Component({
  selector: 'app-emp-service',
  templateUrl: './emp-service.component.html',
  styleUrls: ['./emp-service.component.css']
})
export class EmpServiceComponent implements OnInit {

  employees:any = [];
  errorMessage: string;
  constructor( private _empService: EmpServiceService) { }

  ngOnInit() {
    this._empService.getEmployee()
    .subscribe(data => this.employees =  data.obj, 
                error => this.errorMessage = error)
  }

}
