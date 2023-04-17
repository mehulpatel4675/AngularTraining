import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { MyregisterComponent } from './myregister/myregister.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserListwithinlinestyleComponent } from './user-listwithinlinestyle/user-listwithinlinestyle.component';
import { StudentListComponent } from './student-list/student-list.component';
import { CountryListComponent } from './country-list/country-list.component';
import { UserAuthModule } from './user-auth/user-auth.module';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MyregisterComponent,
    UserListComponent,
    UserListwithinlinestyleComponent,
    StudentListComponent,
    CountryListComponent,
  ],
  imports: [
    UserAuthModule,
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
