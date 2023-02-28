import { Component } from '@angular/core';
import { ProviderService } from '../services/provider.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-provider',
  templateUrl: './add-provider.component.html',
  styleUrls: ['./add-provider.component.css']

})
export class AddProviderComponent {
  constructor(private providerService: ProviderService, private router : Router){

  }

  createProvider(providerform:any)
  {
    let nom = providerform.value.name;
    let address = providerform.value.address;
    let email = providerform.value.email;

    let provider={
      "name":nom,
      "email":email,
      "address":address
    }

    this.providerService.addProvider(provider).subscribe(
      data=>{
           alert("Provider Added !");
           console.log(data);
           this.router.navigate(['listProvider']);
      }
    );

  }
}
