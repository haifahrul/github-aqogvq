import { Injectable } from "@angular/core";
import { Article } from "./article";
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: "root"
})
export class ArticleService {
  articles: Article[];
  article$:BehaviorSubject<Article[]>;
  constructor() {
    this.articles = [
      {
        id: 1,
        title: "Title",
        shortContent: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
        content:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        createdOn: new Date(),
        updatedOn: new Date()
      },
      
    ];
    this.article$ = new BehaviorSubject(this.articles);
  }

  // getAll() {
  //   return this.articles.slice();
  // }
  get(id:number)
  {
    return this.articles[id-1];
  }
  add(article: Article) {

    let l = this.articles.length;
    if(l>0)
    {article.id=this.articles[l-1].id+1;}
    else{
      article.id=1;
    }
    
    this.articles.push(article);
    this.article$.next(this.articles);
    
  }
  update(article:Article)
  { console.log(article);
    this.articles[article.id-1]=article;
    this.article$.next(this.articles);
  }
  delete(id)
  {
    this.articles=this.articles.filter((x)=>x.id!==id)
    this.article$.next(this.articles);
  }
  deleteAll()
  {
    this.articles=[];
    this.article$.next([]);
  }

}
