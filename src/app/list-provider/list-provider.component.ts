import { Component } from '@angular/core';
import { ProviderService } from '../services/provider.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-provider',
  templateUrl: './list-provider.component.html',
  styleUrls: ['./list-provider.component.css']
})
export class ListProviderComponent {
  constructor(private providerservice : ProviderService,private router : Router,){}

  provider : any;
  ngOnInit(): void {
    this.refreshProvider();

  }
  deleteProvider(id:number){
    this.providerservice.deleteProvider(id).subscribe(data=>{
      alert("Provider delete!");
      this.refreshProvider();

 });
  }
  refreshProvider(){

    this.providerservice.getProviders().subscribe(
      data => {
        this.provider = data;
        console.log(this.provider);
      }
    );

  }
  detailsProvider(id: any) {
    this.router.navigate(['detailProvider/'+id]);
  }
  updateProvider(id :any) {
    this.router.navigate(['updateProvider' + '/' + id]);
  }
}
