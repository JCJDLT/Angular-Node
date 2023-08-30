import { Injectable } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { AuthService } from './services/auth.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard2 {
  
  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  canActivate: CanActivateFn = () => {
    if (this.authService.loggedIn()) {
      return true;
    }

    this.router.navigate(['/signin']);
    return false;
  }
}
