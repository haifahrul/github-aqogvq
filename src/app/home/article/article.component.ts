import { Component, OnInit } from '@angular/core';
import {ArticleService} from '../article.service';
import { Article } from '../article';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import {Subscription} from 'rxjs';
@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {
  articles:Article[];
  subscriptions:Subscription=new Subscription();
  deleteArticle:boolean;
  constructor(private articleService:ArticleService,public dialog: MatDialog) { }

  ngOnInit() {

    this.subscriptions.add(this.articleService.article$.subscribe((result)=>{
      console.log("here");
      this.articles=result;
    })
    );
    
  }
  ngOnDestroy()
  {
    this.subscriptions.unsubscribe();
  }
  delete(id)
  { 
    const dialogRef = this.dialog.open(YesNoDialog, {
      width: '250px',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed',result,id);
      if(result)
      {
        this.articleService.delete(id);
        
      }
    });

  }
  deleteAll()
  {
    const dialogRef = this.dialog.open(YesNoDialog, {
      width: '250px'
    });

    dialogRef.afterClosed().subscribe(result => {
      
      if(result)
      {
        this.articleService.deleteAll();
        
      }
    });
  }

}

@Component({
  selector: 'yes-no-dialog',
  templateUrl: 'yes-no-dialog.html',
})
export class YesNoDialog {
  constructor(){}
}
