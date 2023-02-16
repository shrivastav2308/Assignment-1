import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { InfoComponent } from './info/info.component';
import { NewUserComponent } from './new-user/new-user.component';
import { AppRoutingModule } from './app-routing.module';
import { AccountService } from './account.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    InfoComponent,
    NewUserComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [AccountService],
  bootstrap: [AppComponent]
})
export class AppModule { }
