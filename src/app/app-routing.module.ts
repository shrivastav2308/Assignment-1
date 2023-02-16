import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewUserComponent } from './new-user/new-user.component';
import { RouterModule, Routes } from '@angular/router';
import { InfoComponent } from './info/info.component';
import { LoginComponent } from './login/login.component';

const appRoutes: Routes = [
  { path: 'new-user', component: NewUserComponent },
  { path: 'info', component: InfoComponent },
  { path: 'login', component: LoginComponent }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
