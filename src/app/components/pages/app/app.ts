import { Component, inject, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CHeader } from '../../ui/c-header/c-header';
import { LoginService } from '../../../datos/Services/s-login';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CHeader],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('tienda-front');

  loginService = inject(LoginService)
  logged=false;

  ngOnInit() {
    this.loginService.isLogged$.subscribe(isLogged => {
      this.logged = isLogged;
    });
  }
}
