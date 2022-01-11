import { Component, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { Router } from '@angular/router';
import { AuthService } from './shared/services/auth.service';
import { BreakpointObserver } from '@angular/cdk/layout';
import { delay } from 'rxjs/operators';
import { UserLogin } from './shared/model/login';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  @ViewChild(MatSidenav)
  sidenav!: MatSidenav;
  menuOn: boolean = false;
  userActive: any; // = new UserLogin();

  constructor(
    private observer: BreakpointObserver,
    private router: Router,
    private authService: AuthService) { }

  ngOnInit(): void {
    this.authService.mostrarMenuEmitter.subscribe(
      mostrar => this.menuOn = mostrar
    )
    localStorage.clear();
  }

  ngAfterViewInit() {
    this.observer
      .observe(['(max-width: 200px)'])
      .pipe(delay(1))
      .subscribe((res) => {
        if (!res.matches) {
          this.sidenav.mode = 'side';
          this.sidenav.open();
        } else {
          this.sidenav.mode = 'over';
          this.sidenav.close();
        }
      });
  }

  home(){
    this.router.navigate(['/home']);
  }

  cartao(){
    this.router.navigate(['cartao']);
  }

  compra(){
    this.router.navigate(['compra']);
  }

}
