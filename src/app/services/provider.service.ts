import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ProviderService {

  // injection de dependences : HttpClient
  constructor(private http: HttpClient) { }

  //1)get Providers
  getProviders() {
    return this.http.get("http://127.0.0.1:8080/providers/list");
  }

  //2) add provider
  addProvider(provider:any) {
    return this.http.post("http://127.0.0.1:8080/providers/add",provider);
  }

  //3) get provider
  getProvider(id:number) {
    return this.http.get("http://127.0.0.1:8080/providers/"+id);

  }

  //4) add provider
  deleteProvider(id:number) {
    return this.http.delete("http://127.0.0.1:8080/providers/"+id);
   }

  //5) add provider
  updateProvider(id:number, new_provider:any) {

    return this.http.put("http://127.0.0.1:8080/providers/"+id, new_provider);
  }

}
