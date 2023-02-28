import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  constructor(private http: HttpClient) { }

  //1)get Providers
  getAllArticle() {
    return this.http.get("http://127.0.0.1:8080/articles/list");
  }

  //2) add provider
  addArticle(id_p:any,article :any) {
    return this.http.post("http://127.0.0.1:8080/articles/add/"+id_p,article);
  }

  //3) get provider
  getArticle(id:number) {
    return this.http.get("http://127.0.0.1:8080/articles/"+id);

  }

  //4) add provider
  deleteArticle(id:number) {
    return this.http.delete("http://127.0.0.1:8080/articles/delete/"+id);
  }

  //5) add provider
  updateArticle(id:number, new_article:any) {

    return this.http.put("http://127.0.0.1:8080/articles/update/"+id, new_article);
  }
}
