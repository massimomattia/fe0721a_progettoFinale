import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/auth/login/login.component';
import { NavbarComponent } from './components/navbar/navbar/navbar.component';
import { FormBuilder } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormBuilder
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
