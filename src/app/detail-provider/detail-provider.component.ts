import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProviderService } from '../services/provider.service';
@Component({
  selector: 'app-detail-provider',
  templateUrl: './detail-provider.component.html',
  styleUrls: ['./detail-provider.component.css']
})
export class DetailProviderComponent {
  provider: any;
  private id: any;
  // injection de dependences : ProviderService
  constructor(private providerService: ProviderService, private activeRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activeRoute.paramMap.subscribe(
      params => {
        this.id = params.get('id');
      });


    this.providerService.getProvider(this.id).subscribe(
      response => {
        //console.log(response);
        this.provider = response
      }
    );
  }

}
