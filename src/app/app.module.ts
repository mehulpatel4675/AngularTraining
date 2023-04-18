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
import { HeaderComponent } from './header/header.component';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MyregisterComponent,
    UserListComponent,
    UserListwithinlinestyleComponent,
    StudentListComponent,
    CountryListComponent,
    HeaderComponent,
  ],
  imports: [
    UserAuthModule,
    BrowserModule,
    FormsModule,
    NgbModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
