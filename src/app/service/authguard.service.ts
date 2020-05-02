import { Injectable } from '@angular/core';
import { CanActivate, Router}  from '@angular/router';
import { AuthserviceService } from './authservice.service';

@Injectable({
  providedIn: 'root'
})
export class AuthguardService implements CanActivate {

  canActivate() {
    if(this.authService.isLoggin()) {
      return true;
    }
    this.router.navigate(['/']);
    return false;
  }
  constructor(private authService: AuthserviceService, private router: Router) { }
}
