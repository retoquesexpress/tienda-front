import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { LoginService } from '../../../datos/Services/s-login';
import { Router } from '@angular/router';



@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.scss'
})
export class Login {

  loginService = inject(LoginService);
  router = inject(Router);

  LoginData = {
    userName: '',
    password: ''
  }



  login() {

    this.loginService.login(this.LoginData.userName, this.LoginData.password).subscribe({
      next: data => {
        this.loginService.saveToken(data.token);
        this.router.navigate(['/inicio']);
      },
      error: err => {
        console.log(err);
        alert('Usuario o contraseña incorrectos');
        this.router.navigate(['/']);
      }
    });
  }
}
