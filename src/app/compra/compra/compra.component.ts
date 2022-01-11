import { CompraService } from './../compra.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Compra } from '../compra.model';

@Component({
  selector: 'app-compra',
  templateUrl: './compra.component.html',
  styleUrls: ['./compra.component.scss']
})
export class CompraComponent implements OnInit {

  compras$: Observable<Compra[]>;

  colunasTabela = ["id", "data", "valor", "parcela", "fornecedor", "produto", "cartao"]

  constructor(private compraService: CompraService) { }

  ngOnInit(): void {
    this.listaCompras();
  }

  listaCompras(){
    this.compras$ = this.compraService.listar();
  }

}

//  private Long id;
// 	private LocalDate data;
// 	private double valor;
// 	private int parcela;
// 	private String fornecedor;
// 	private String produto;
// 	private Cartao cartao;
