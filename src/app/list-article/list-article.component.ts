import { Component } from '@angular/core';
import {ArticleService} from "../services/article.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-list-article',
  templateUrl: './list-article.component.html',
  styleUrls: ['./list-article.component.css']
})
export class ListArticleComponent {
  constructor(private articleService : ArticleService,private router : Router,){}
  article: any;
  ngOnInit(): void {
    this.refreshArticle();
  }
  refreshArticle(){
    this.articleService.getAllArticle().subscribe(
      data => {
        this.article = data;

      }
    );
  }
  deleteArticle(id:number) {
    this.articleService.deleteArticle(id).subscribe(data => {
      //confirm("voulez vous vraiment supprimer ?");
      alert("Artcle delete!");
      this.refreshArticle();

    });
  }
  updateArticle(id :any) {
    this.router.navigate(['updateArticle' + '/' + id]);
  }
}
