import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddContactComponent } from './components/add-contact/add-contact.component';
import { CardComponent } from './components/card/card.component';
import { EditContactComponent } from './components/edit-contact/edit-contact.component';

const routes: Routes = [
  {path : "",pathMatch:"full", component:CardComponent},
  {path : "add-contact", component:AddContactComponent},
  {path : "edit-contact", component:EditContactComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
