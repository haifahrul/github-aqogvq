import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'
import { AuthenticationService } from '../../authentication.service';

@Component({
  selector: 'app-inter-layout',
  templateUrl: './inter-layout.component.html',
  styleUrls: ['./inter-layout.component.css']
})
export class InterLayoutComponent implements OnInit {
  title:string;
  constructor(private router:Router,private authService:AuthenticationService) { }

  ngOnInit() {
  }
  logout()
  {
   this.authService.Logout();
  }
  changeToolbarTitle(title:string)
  {
    this.title = title;
  }

}
