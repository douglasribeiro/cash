import { Router } from '@angular/router';
import { EventEmitter, Injectable } from '@angular/core';
import { Usuario } from '../model/usuario';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private usuarioAutenticado: boolean = false;
  mostrarMenuEmitter = new EventEmitter<boolean>();

  constructor(private router: Router) { }

  fazerLogin(usuario: Usuario){
//    if(usuario.email === 'joao@gmail.com' && usuario.senha === '123456'){
//      console.log("usuario autenticados")
      this.usuarioAutenticado = true;
      this.mostrarMenuEmitter.emit(this.usuarioAutenticado);
      this.router.navigate(['home']);
//    }else{
//      this.usuarioAutenticado = false;
//      this.mostrarMenuEmitter.emit(this.usuarioAutenticado);
//    }
  }

  usuarioOn(){
    return this.usuarioAutenticado;
  }
}
