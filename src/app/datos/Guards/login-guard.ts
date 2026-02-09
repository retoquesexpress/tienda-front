import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { LoginService } from '../Services/s-login';
import { map } from 'rxjs';

export const loginGuard: CanActivateFn = () => {
  const loginService = inject(LoginService);
  const router = inject(Router);

  if (loginService.isAdmin()) {
    return true;
  } else {
    // Si no es admin, redirigir al login (o inicio)
    router.navigate(['/']);
    return false;
  }
};
