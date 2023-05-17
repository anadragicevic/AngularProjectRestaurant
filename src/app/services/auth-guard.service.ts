import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthServiceService } from './auth.service.service'
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(private auth: AuthServiceService, private router: Router) { }

  canActivate() {
    return this.auth.user$.pipe(map(user => {
      if (user) return true;

      this.router.navigate(['/poručivanje']);
      return false;
    }))
  }
}
