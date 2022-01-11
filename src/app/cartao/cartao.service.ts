import { Cartao } from './carao.model';
import { Observable } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import * as AppUtils from '../shared/app.utils';

@Injectable({
  providedIn: 'root'
})
export class CartaoService {

  private baseUrl = 'http://localhost:8080';
  private endpoint = 'cartao';

  constructor(private httpClient: HttpClient) { }

  listar():Observable<Cartao[]>{
    return this.httpClient.get<Cartao[]>(`${this.baseUrl}/${this.endpoint}`,AppUtils.OPTIONS_OBJECTO);
  }

  salvar(cartao: Cartao): Observable<any> {

    const params = new HttpParams()
    .set('grant_type', 'password')
    .set('username', localStorage.getItem('username'))
    .set('password', localStorage.getItem('password'));

    const options = {
      headers: AppUtils.HEADERS_COMMUN,
      params
    };
    return this.httpClient.post(`${this.baseUrl}/${this.endpoint}`, cartao, options)
  }

  atualizar(cartao: Cartao): Observable<any>{
    const params = new HttpParams()
    .set('grant_type', 'password')
    .set('username', localStorage.getItem('username'))
    .set('password', localStorage.getItem('password'));

    const options = {
      headers: AppUtils.HEADERS_COMMUN,
      params
    };
    return this.httpClient.put(`${this.baseUrl}/${this.endpoint}/${cartao.id}`, cartao, options)
  }

  pesquisaPorId(id: string): Observable<Cartao>{
    return this.httpClient.get<Cartao>(`${this.baseUrl}/${this.endpoint}/${id}`)
  }

  deleta(id: number): Observable<Cartao>{
    return this.httpClient.delete<Cartao>(`${this.baseUrl}/${this.endpoint}/${id}`)
  }
}
