import { Component } from '@angular/core';
import { EmpServiceService } from './emp-service.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Http Request Demo';

  public employees = {};

  constructor( private _empService: EmpServiceService) { }

  ngOnInit() {
    // this.employees = this._empService.getEmployee()
    // .subscribe(data => {
    //   console.log("We got", data)
    // })
  }
}
