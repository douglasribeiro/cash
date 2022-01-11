import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { UserLogin } from 'src/app/shared/model/login';
import { Usuario } from 'src/app/shared/model/usuario';
import { ApiService } from 'src/app/shared/services/api.service';
import { AuthService } from 'src/app/shared/services/auth.service';
import { MessageService } from 'src/app/shared/services/message.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  usuario: Usuario = new Usuario();
  formulario: FormGroup;
  submitted = false;
  private unsubscribeMessage = new Subject();
  user = new UserLogin();

  constructor(
    private authService: AuthService,
    private formBuilder: FormBuilder,
    private messageService: MessageService,
    private apiService: ApiService,
    private router: Router,
  ) {
    this.formulario = this.formBuilder.group({
      email: [null],
      password: [null]
    })
   }

  ngOnInit(): void {
    this.messageService.notfyObservable$.pipe(takeUntil(this.unsubscribeMessage)).subscribe(result => {
      if (result === true) {
        this.submitted = false;
      }
    } );
  }

  login(){
    this.user = this.formulario.value;
    localStorage.clear();
    this.submitted = true;
    this.apiService.login(this.user).subscribe(data => {
      this.loginSuccess(data);
    }, error => {
      this.messageService.showError('Login', 'Falha de autenticação');
    });
  }

  public loginSuccess(data: any) {
    localStorage.clear();
    localStorage.setItem('accessToken', data.access_token);
    localStorage.setItem('refreshToken', data.refresh_token);
    localStorage.setItem('username', this.user.email);
    localStorage.setItem('password', this.user.password);
    this.apiService.getMainUser(localStorage.getItem('accessToken')).subscribe(user => {
      this.redirectPage(user);
    }, error => {
      this.messageService.showError('Usuário principal', 'Falha ao carregar usuário principal');
    });
  }

  public  redirectPage(user: any) {
    localStorage.setItem('currentUser', JSON.stringify(user));
    this.usuario = this.formulario.value;
    this.authService.fazerLogin(this.usuario);
    this.messageService.showSuccess( 'Sr Usuario', 'Bem vindo ao Controle financeiro.');
  }
  ngOnDestroy() {
    this.unsubscribeMessage.next;
    this.unsubscribeMessage.complete();
  }

}
