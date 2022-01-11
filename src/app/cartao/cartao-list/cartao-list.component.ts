import { Observable } from 'rxjs';
import { CartaoService } from './../cartao.service';
import { Component, OnInit } from '@angular/core';
import { Cartao } from '../carao.model';

@Component({
  selector: 'app-cartao-list',
  templateUrl: './cartao-list.component.html',
  styleUrls: ['./cartao-list.component.scss']
})
export class CartaoListComponent implements OnInit {

  cartoes$: Observable<Cartao[]>;
  colunasTabela = ["id", "numero", "banco", "bandeira", "limite", "fechamento", "vencimento"];


  constructor(private cartaoService: CartaoService) { }

  ngOnInit(): void {
    this.listarCartoes();
  }

  listarCartoes(){
    this.cartoes$ = this.cartaoService.listar();
  }

}
