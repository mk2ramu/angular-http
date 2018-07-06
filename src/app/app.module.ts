import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { EmpServiceComponent } from './emp-service/emp-service.component';
import { EmpServiceService } from './emp-service.service';

@NgModule({
  declarations: [
    AppComponent,
    EmpServiceComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [EmpServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
