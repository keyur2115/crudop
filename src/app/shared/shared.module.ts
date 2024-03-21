import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgxImageZoomModule } from 'ngx-image-zoom';
import { AgGridModule } from 'ag-grid-angular'; // Angular Grid Logic


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    NgxImageZoomModule,
    AgGridModule
  ],
  exports:[
    FormsModule,
    HttpClientModule,
    NgxImageZoomModule,
    AgGridModule
    ]
})
export class SharedModule { }
