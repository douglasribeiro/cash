import { CompraEditComponent } from './compra-edit/compra-edit.component';
import { CompraComponent } from './compra/compra.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: "", component: CompraComponent},
  { path: "novo", component: CompraEditComponent},
  { path: "edit/:id", component: CompraEditComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CompraRoutingModule { }
