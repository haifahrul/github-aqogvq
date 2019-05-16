import { Component, OnInit, ViewChild,Input, ElementRef } from '@angular/core';
import { Router } from '@angular/router';



@Component({
  selector: 'new-tab-opt',
  templateUrl: './new-tab-button.component.html',
  styleUrls: ['./new-tab-button.component.css']
})
export class NewTabButtonComponent implements OnInit {

  @ViewChild('anchor') a:ElementRef<HTMLAnchorElement>;
  //@ViewChild('button') button:ElementRef<HTMLButtonElement>;
  @Input() link:string;
  constructor(private router:Router) { }

  ngOnInit() {
  
    
    
    this.a.nativeElement.addEventListener ('mousedown',(event:MouseEvent)=> {

      switch (event.which) {
          case 1:
              this.router.navigate(this.link.split('/').slice(1));
              return;
          case 2:
              //alert('Middle mouse button pressed');
              
              break;
          case 3:
              //alert('Right mouse button pressed');
              break;
          default:
              //alert('You have a strange mouse');
              
      }
  });
  }

  

}
