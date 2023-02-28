import { Component,OnInit } from '@angular/core';
import { ProviderService } from '../services/provider.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';




@Component({
  selector: 'app-update-provider',
  templateUrl: './update-provider.component.html',
  styleUrls: ['./update-provider.component.css']
})
export class UpdateProviderComponent {
  public id : any
  public provider :any;
  public providerToUpdate: any;
  public name: any;
  public email: any;
  public address: any;

  constructor(private service: ProviderService, private router: Router, private route: ActivatedRoute ) { }
  ngOnInit() {
    this.route.paramMap.subscribe(
      params => {
        this.id = params.get('id');
      }
    );
    this.providerToUpdate = this.service.getProvider(this.id).subscribe(
      response => {

        this.provider =response
        console.log(this.provider)
        this.name = this.provider.name;
        this.email = this.provider.email;
        this.address = this.provider.address;

      }
    );

  }
  updateProvider() {
    this.providerToUpdate = {
      'name': this.name,
      'email': this.email,
      'address': this.address,
      'id': this.id
    }

    this.service.updateProvider(this.id,this.providerToUpdate).subscribe(
      response => {
        console.log(response);
      }
    );
  }

}
