import { CartaoListComponent } from './cartao/cartao-list/cartao-list.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './shared/guards/auth.guard';

const routes: Routes = [
  {path: "", component: HomeComponent, canActivate: [AuthGuard]},
  {path: "home", component: HomeComponent, canActivate: [AuthGuard]},
  { path: "login", loadChildren: () => import('./login/login.module').then(m => m.LoginModule)},
  { path: "cartao", loadChildren: () => import('./cartao/cartao.module').then(m => m.CartaoModule), canActivate: [AuthGuard]},
  { path: "compra", loadChildren: () => import('./compra/compra.module').then(m => m.CompraModule), canActivate: [AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
