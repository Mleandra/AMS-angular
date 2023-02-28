import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListProviderComponent } from './list-provider/list-provider.component';

import { AddProviderComponent } from './add-provider/add-provider.component';

import { ContactComponent } from './contact/contact.component';
import {DetailProviderComponent} from "./detail-provider/detail-provider.component";
import {UpdateProviderComponent} from "./update-provider/update-provider.component";
import {ListArticleComponent} from "./list-article/list-article.component";
import {AddArticleComponent} from "./add-article/add-article.component";

const routes: Routes = [
  { path: "", pathMatch: "full", redirectTo: "app-navbar" },
  { path: "listProvider", component: ListProviderComponent },
  { path: "listArticle", component: ListArticleComponent},
  { path: "addProvider", component: AddProviderComponent },
  { path: "addArticle", component: AddArticleComponent},
  { path: "contact", component: ContactComponent },
  { path: "detailProvider/:id", component: DetailProviderComponent },
  { path: "updateProvider/:id", component: UpdateProviderComponent },
]


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
