import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListProviderComponent } from './list-provider/list-provider.component';
import { HttpClientModule } from '@angular/common/http';
import { AddProviderComponent } from './add-provider/add-provider.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { ContactComponent } from './contact/contact.component';
import { FormsModule } from '@angular/forms';
import { DetailProviderComponent } from './detail-provider/detail-provider.component';
import { UpdateProviderComponent } from './update-provider/update-provider.component';
import { ListArticleComponent } from './list-article/list-article.component';
import { AddArticleComponent } from './add-article/add-article.component';
import { UpdateArticleComponent } from './update-article/update-article.component';

@NgModule({
  declarations: [
    AppComponent,
    ListProviderComponent,
    AddProviderComponent,
    NavBarComponent,
    ContactComponent,
    DetailProviderComponent,
    UpdateProviderComponent,
    ListArticleComponent,
    AddArticleComponent,
    UpdateArticleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
