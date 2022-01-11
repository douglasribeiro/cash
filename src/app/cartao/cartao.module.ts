import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from './../shared/material.module';
import { LOCALE_ID, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CartaoRoutingModule } from './cartao-routing.module';
import { CartaoListComponent } from './cartao-list/cartao-list.component';
import { CartaoEditComponent } from './cartao-edit/cartao-edit.component';


@NgModule({
  declarations: [
    CartaoListComponent,
    CartaoEditComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    CartaoRoutingModule,
    MaterialModule
  ]
})
export class CartaoModule { }
