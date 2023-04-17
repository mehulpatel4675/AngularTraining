import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignOutComponent } from './sign-out/sign-out.component';
// import { LoginComponent } from '../login/login.component';


@NgModule({
  declarations: [
    SignInComponent,
    SignOutComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    SignInComponent
  ]
})
export class UserAuthModule { }
