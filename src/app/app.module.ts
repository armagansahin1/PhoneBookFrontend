import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import {  FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CardComponent } from './components/card/card.component';
import { AddContactComponent } from './components/add-contact/add-contact.component';
import { ToastrModule } from 'ngx-toastr';
import { NameStylePipe } from './pipes/name-style.pipe';
import { EditContactComponent } from './components/edit-contact/edit-contact.component';




@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CardComponent,
    AddContactComponent,
    NameStylePipe,
    EditContactComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
