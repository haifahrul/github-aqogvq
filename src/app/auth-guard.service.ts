import { Injectable } from '@angular/core';
import {CanActivate,ActivatedRouteSnapshot,RouterStateSnapshot, CanActivateChild, Router} from '@angular/router'
import {AuthenticationService} from './authentication.service';
@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivateChild {
  
  

  constructor(private authService:AuthenticationService,private router:Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean  
  { 
    if(!this.authService.isAuthenticated())
    {
      this.router.navigate(['login'])
      return false;
    }
    else
    {
      return this.authService.isAuthenticated();
    }
  }

  canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean
  {
    if(!this.authService.isAuthenticated())
    {
      this.router.navigate(['login'])
      return false;
    }
    else
    {
      return this.authService.isAuthenticated();
    }
  }
  
}
