import { CartaoService } from './cartao.service';
import { Cartao } from './carao.model';
import { empty, Observable } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import * as AppUtils from '../shared/app.utils';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class CartaoResolver  implements Resolve<Cartao>{

  private baseUrl = 'http://localhost:8080';
  private endpoint = 'cartao';

  constructor(private cartaoService: CartaoService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Cartao | Observable<Cartao> {
    const id = route.params["id"]
    if(id){
      return this.cartaoService.pesquisaPorId(id);
    }
    return empty();
  }

}
