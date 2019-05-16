import { Component, OnInit, ElementRef } from '@angular/core';
import { Article } from '../article';
import { ArticleService } from '../article.service';
import { Router, ActivatedRoute } from '@angular/router';
import {ViewChild} from '@angular/core'
import { Content } from '@angular/compiler/src/render3/r3_ast';

@Component({
  selector: 'app-article-create',
  templateUrl: './article-create.component.html',
  styleUrls: ['./article-create.component.css']
})
export class ArticleCreateComponent implements OnInit {

 // article2:Article;
  @ViewChild('content1') Content:ElementRef;
  edit:boolean;
  article:Article={id:0,title:null,shortContent:null,content:null,createdOn:new Date(),updatedOn:new Date()};
  article2:Article;
  constructor(private articleService:ArticleService,private router:Router,private activatedRoute:ActivatedRoute) { }

  ngOnInit() {
    let id:number = Number.parseInt(this.activatedRoute.snapshot.paramMap.get('id'));
    if(this.activatedRoute.snapshot.data.action==='edit')
    {
      this.edit=true;
    }
    else if(this.activatedRoute.snapshot.data.action==='open')
    {
      this.edit=false; 
    }


    if(id)
    {
      let article= this.articleService.get(id);
      if(!article){this.router.navigate(['event']);return;}
      else{this.article=article;}
    
    
      this.article2={...this.article};
    }
    else{  this.article={id:0,title:null,shortContent:null,content:null,createdOn:new Date(),updatedOn:new Date()}
    this.articleService.add(this.article);
    this.article2={...this.article};
    this.edit =true;
  }
  console.log(this.Content.nativeElement);
  }
  onTitleChange(title:HTMLHeadElement)
  {
    
     this.article2.title = title.innerHTML;
     this.articleService.update({...this.article2});
  }

  onContentChange(content:HTMLDivElement)
  {
    this.article2.content = content.innerHTML;
    this.article2.shortContent=content.innerText.substr(0,200);
    this.articleService.update({...this.article2});
  }

}
