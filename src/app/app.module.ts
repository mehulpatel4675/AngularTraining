import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { UserAuthModule } from './user-auth/user-auth.module';
import { HeaderComponent } from './header/header.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ChildComponent } from './child/child.component';
import { UsdToInrPipe } from './login/pipes/usd-to-inr.pipe';
// import{ReactiveFormsModule} from '@angular/forms'
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HeaderComponent,
    ChildComponent,
    UsdToInrPipe,
  ],
  imports: [
    UserAuthModule,
    FormsModule,
    NgbModule,
    BrowserAnimationsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
