import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddCustomersComponent } from './components/add-customers/add-customers.component';
import { ContactComponent } from './components/contact/contact.component';
import { CustomerDetailsComponent } from './components/customer-details/customer-details.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { PnfComponent } from './components/pnf/pnf.component';
import { RegisterComponent } from './components/register/register.component';
import { ShowCustomersComponent } from './components/show-customers/show-customers.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { AuthGuard } from './guards/auth.guard';


const routes: Routes = [
  { path: "", pathMatch: "full", redirectTo: "login" },
  { path: "login", component: LoginComponent },
  { path: 'home', component: HomeComponent, canActivate: [AuthGuard] },
  { path: "register", component: RegisterComponent },
  { path: "contacts", component: ContactComponent, canActivate: [AuthGuard] },
  { path: "show-customer", component: ShowCustomersComponent, canActivate: [AuthGuard] },
  { path: "customer-details", component: CustomerDetailsComponent, canActivate: [AuthGuard] },
  { path: "add-customer", component: AddCustomersComponent, canActivate: [AuthGuard] },
  { path: "sidebar", component: SidebarComponent, canActivate: [AuthGuard] },
  { path: "**", component: PnfComponent },


]; 

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
