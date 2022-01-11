import { MaterialModule } from './../shared/material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CompraRoutingModule } from './compra-routing.module';
import { CompraComponent } from './compra/compra.component';
import { CompraEditComponent } from './compra-edit/compra-edit.component';


@NgModule({
  declarations: [
    CompraComponent,
    CompraEditComponent
  ],
  imports: [
    CommonModule,
    CompraRoutingModule,
    MaterialModule
  ]
})
export class CompraModule { }
