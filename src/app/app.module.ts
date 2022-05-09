import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {CoreModule} from "./core/core.module";
import {StudentModule} from "./student/student.module";
import {DepartmentModule} from "./department/department.module";

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    StudentModule,
    DepartmentModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
