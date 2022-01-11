import { CartaoListComponent } from './cartao-list/cartao-list.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartaoEditComponent } from './cartao-edit/cartao-edit.component';
import { CartaoResolver } from './cartao.resolver';

const routes: Routes = [
  { path: "", component: CartaoListComponent},
  { path: "cadastrar", component: CartaoEditComponent},
  { path: "edit/:id", component: CartaoEditComponent, resolve: { cartao: CartaoResolver}}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CartaoRoutingModule { }
