import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from './product/product.component';
import {MatTableModule} from "@angular/material/table";
import {ConvertDashPipe} from "../pipes/convert-dash.pipe";
import {MatButtonModule} from "@angular/material/button";
import {SharedModule} from "../shared/shared.module";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {ArraySearchPipe} from "../pipes/array-search.pipe";
import {FormsModule} from "@angular/forms";
import {MatDatepickerModule} from "@angular/material/datepicker";
import {MatNativeDateModule} from "@angular/material/core";
import {MatSelectModule} from "@angular/material/select";



@NgModule({
  declarations: [
    ProductComponent,
    ConvertDashPipe,
    ArraySearchPipe
  ],
  imports: [
    SharedModule,
    CommonModule,
    MatTableModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    FormsModule,
    MatSelectModule,
  ],
  exports: [
    ProductComponent
  ]
})
export class ProductModule { }
