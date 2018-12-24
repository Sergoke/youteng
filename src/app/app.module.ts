import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from './shared/shared.module';
import { MaterialModule } from './material/material.module';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';

import { ContentModule } from './content/content.module';
import { AdminModule } from './admin/admin.module';

import { AppComponent } from './app.component';
import { LoginComponent } from './core/auth/components/login/login.component';
import { SignupComponent } from './core/auth/components/signup/signup.component';
import { LogOutComponent } from './core/auth/components/log-out/log-out.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    LogOutComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    AdminModule,
    SharedModule,
    MaterialModule,
    ContentModule
  ],
  providers: [],
  entryComponents: [
    LoginComponent,
    SignupComponent,
    LogOutComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
