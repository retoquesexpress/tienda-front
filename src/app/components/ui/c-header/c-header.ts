import { Component, inject } from '@angular/core';
import { RouterLink } from "@angular/router";
import { LoginService } from '../../../datos/Services/s-login';

@Component({
  selector: 'c-header',
  imports: [RouterLink],
  templateUrl: './c-header.html',
  styleUrl: './c-header.scss',
})
export class CHeader {
  loginService = inject(LoginService);
}
