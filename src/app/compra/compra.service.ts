import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cartao } from '../cartao/carao.model';
import { Compra } from './compra.model';
import * as AppUtils from '../shared/app.utils';

@Injectable({
  providedIn: 'root'
})
export class CompraService {

  private baseUrl = 'http://localhost:8080';
  private endpoint = 'compra';

  constructor(private httpClient: HttpClient) { }

  listar():Observable<Compra[]>{
    return this.httpClient.get<Compra[]>(`${this.baseUrl}/${this.endpoint}`,AppUtils.OPTIONS_OBJECTO);
  }
}
