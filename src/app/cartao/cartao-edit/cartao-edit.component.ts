import { Cartao } from './../carao.model';
import { CartaoService } from './../cartao.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Location } from '@angular/common';
import { MessageService } from 'src/app/shared/services/message.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-cartao-edit',
  templateUrl: './cartao-edit.component.html',
  styleUrls: ['./cartao-edit.component.scss']
})
export class CartaoEditComponent implements OnInit {

  formulario: FormGroup;
  cartao: Cartao;

  constructor(
    private formBuilder: FormBuilder,
    private location: Location,
    private router: Router,
    private cartaoService: CartaoService,
    private messageService: MessageService,
    private activateRoute: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.cartao = this.activateRoute.snapshot.data["cartao"];
    this.formulario = this.formBuilder.group({
      id: [(this.cartao && this.cartao.id)? this.cartao.id: null],
      numero: [(this.cartao && this.cartao.numero)? this.cartao.numero: null, Validators.required],
      banco: [(this.cartao && this.cartao.banco)? this.cartao.banco: null, Validators.required],
      bandeira: [(this.cartao && this.cartao.bandeira)? this.cartao.bandeira: null, Validators.required],
      limite: [(this.cartao && this.cartao.limite)? this.cartao.limite: null, Validators.required],
      fechamento: [(this.cartao && this.cartao.fechamento)? this.cartao.fechamento: null, Validators.required],
      vencimento: [(this.cartao && this.cartao.vencimento)? this.cartao.vencimento: null, Validators.required]
    })
  }

  salvar(){
    if (this.cartao && this.cartao.id){
      this.cartaoService.atualizar(this.formulario.value).subscribe( data => {
        this.messageService.showSuccess('Cartão', 'Cartao alterado com sucesso!');
        this.voltar();
      }, error => {
        this.messageService.showError('Cartão', 'Falha na alteração de novo cartão');
      });
    }else{
      this.cartaoService.salvar(this.formulario.value).subscribe( data => {
        this.messageService.showSuccess('Cartão', 'Cartao incluido com sucesso!');
        this.voltar();
      }, error => {
        this.messageService.showError('Cartão', 'Falha na inclusão de novo cartão');
      });
  }
  }

  deletar(){
    if(confirm("Deseja deletar o Cartão " + this.cartao.numero)){
      this.cartaoService.deleta(this.cartao.id).subscribe(
        response => {
          this.router.navigateByUrl("/cartao");
        },
        error => {
          alert("Erro ao excluir cartão " + JSON.stringify(error));
        }
      )
    }
  }


  voltar(){
    this.location.back();
  }
}
