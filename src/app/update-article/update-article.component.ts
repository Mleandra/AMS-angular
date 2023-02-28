import { Component } from '@angular/core';
import {ProviderService} from "../services/provider.service";
import {ArticleService} from "../services/article.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-update-article',
  templateUrl: './update-article.component.html',
  styleUrls: ['./update-article.component.css']
})
export class UpdateArticleComponent {
  constructor(private articleService : ArticleService,private providerService: ProviderService, private router: Router, private route: ActivatedRoute) {
  }
 id :any;
  articleToUpdate :any;
  ngOnInit() {
    this.route.paramMap.subscribe(
      params => {
        this.id = params.get('id');
      }
    );

    

  }


}

