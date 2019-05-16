import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule} from '@angular/forms';
import {AppRoutingModule} from './app-routing.module';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';

import { ExtrLayoutComponent } from './extr-layout/extr-layout.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MaterialModule} from './material/material.module';
import { AuthenticationService } from './authentication.service';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,    
    ExtrLayoutComponent
  ],
  imports: [
    BrowserModule, ReactiveFormsModule, AppRoutingModule, BrowserAnimationsModule,MaterialModule
  ],
  providers: [AuthenticationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
