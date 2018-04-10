import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { routing }  from './app.routing';


import { AppComponent } from './app.component';
import {NabvarComponent} from './nabvar/nabvar.component';
import { LoginComponent } from './login/login.component';

import { LoginService } from './login.service';
import { UserService } from './user.service';
import { UserAccountComponent } from './user-account/user-account.component';
import { PrimaryTransactionComponent } from './primary-transaction/primary-transaction.component';
import { SavingsTransactionComponent } from './savings-transaction/savings-transaction.component';

@NgModule({
  declarations: [
    AppComponent,
    NabvarComponent,
    LoginComponent,
    UserAccountComponent,
    PrimaryTransactionComponent,
    SavingsTransactionComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [
     LoginService,
     UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

