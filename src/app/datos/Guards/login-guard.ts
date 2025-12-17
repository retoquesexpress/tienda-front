import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { LoginService } from '../Services/s-login';
import { map } from 'rxjs';

export const loginGuard: CanActivateFn = () => {
  const loginService = inject(LoginService);
  const router = inject(Router);

  return loginService.isLogged$.pipe(
    map(isLogged => {
      if (!isLogged) {
        alert('Necesitas iniciar sesión');
        router.navigate(['/login']);
        return false;
      }
      return true;
    })
  );
};
