import { Component } from '@angular/core';
import {ProviderService} from "../services/provider.service";
import {Router} from "@angular/router";
import {ArticleService} from "../services/article.service";

@Component({
  selector: 'app-add-article',
  templateUrl: './add-article.component.html',
  styleUrls: ['./add-article.component.css']
})
export class AddArticleComponent {
  constructor(private articleService: ArticleService,private  providerservice :ProviderService, private router : Router){

  }
  provider :any;
  ngOnInit(): void {
    this.providerservice.getProviders().subscribe(
      data => {
        this.provider = data;
        console.log(this.provider);
      }
    );

  }

  createArticle(articleform:any)
  {
    let label = articleform.value.label;
    let picture = articleform.value.picture;
    let price= articleform.value.price;
    let provider_id= articleform.value.provider_id;

    let article ={
      "label":label,
      "picture":picture,
      "price":price,
      "provider_id":provider_id,
    }

    this.articleService.addArticle(provider_id,article).subscribe(
      data=>{
        alert("article Added !");
        console.log(data);
        this.router.navigate(['listArticle']);
      }
    );

  }

}
