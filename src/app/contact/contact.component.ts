import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {

  contactadd(contactform:any)
  {
    let des = contactform.value.description;
    let nom = contactform.value.name;

    let email = contactform.value.email;

           alert("Nom"+nom+"\n mail de "+email +"\n"+des);}


}
