import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { LoginService } from '../../../datos/Services/s-login';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  imports: [FormsModule, RouterLink],
  templateUrl: './login.html',
  styleUrl: './login.scss'
})
export class Login {
  user: User = {
    id: '',
    name: '',
    email: '',
    userName: '',
    password: '',
    phoneNumber: '',
    address: '',
    birthDate: new Date(),
    role: ''
  }
  loginService = inject(LoginService);

  ngOnInit() {
    this.loginService.getAll();
  }


  login() {
   

      this.loginService.login(this.user);

      this.loginService.isLogged$.subscribe(isLogged => {
        if (isLogged) {
          this.router.navigate(['/inicio']);
        } else {
          alert('Usuario o contraseña incorrectos');
          this.router.navigate(['/']);

        }
      });
  }

    router = inject(Router);

}
