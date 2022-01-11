import { Data } from "@angular/router";
import { Cartao } from "../cartao/carao.model";

export interface Compra{
  id: number;
  data: Data;
  valor: number;
 	parcela: number;
 	fornecedor: string;
 	produto: string;
 	cartao: Cartao;
}
