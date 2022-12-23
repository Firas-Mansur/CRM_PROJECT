
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAuth, getAuth } from '@angular/fire/auth';
import { provideFirestore, getFirestore } from '@angular/fire/firestore';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginComponent } from './components/login/login.component';
import { FormsModule, NgModel } from '@angular/forms';
import { PnfComponent } from './components/pnf/pnf.component';
import { ContactComponent } from './components/contact/contact.component';
import { ShowCustomersComponent } from './components/show-customers/show-customers.component';
import { AddCustomersComponent } from './components/add-customers/add-customers.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from './components/home/home.component';
import { RegisterComponent } from './components/register/register.component';
import { NgModule } from '@angular/core';
import { EditCustomerComponent } from './components/edit-customer/edit-customer.component';
import { FilterPipe } from './pipes/filter.pipe';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { CustomerDetailsComponent } from './components/customer-details/customer-details.component';

 






@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    PnfComponent,
    ContactComponent,
    ShowCustomersComponent,
    AddCustomersComponent,
    HomeComponent,
    RegisterComponent,
    EditCustomerComponent,
    FilterPipe,
    SidebarComponent,
    CustomerDetailsComponent,

  

  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),
    FormsModule,
    NgbModule,



  ],
  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
