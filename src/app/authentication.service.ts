import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  
  constructor(private router:Router) { }

  public isAuthenticated():boolean
  { 
    if(localStorage.getItem('isAuthenticated')==="true")
    {return true;}
    else{return false;}
  }
  public Authenticate()
  { localStorage.setItem('isAuthenticated',"true");
    
  }
  public Logout()
  { this.router.navigate(['login']);
    localStorage.removeItem('isAuthenticated');
    
  }
}
