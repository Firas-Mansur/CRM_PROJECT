import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Customer } from 'src/app/interface/Customer';
import { CustomerService } from 'src/app/services/customer.service';

@Component({
  selector: 'app-add-customers',
  templateUrl: './add-customers.component.html',
  styleUrls: ['./add-customers.component.css']
})
export class AddCustomersComponent implements OnInit {

  customer: Customer = {FirstName:"", LastName: "", phone:"", email: "" }
  constructor(private cs: CustomerService, private router: Router) { }

  ngOnInit(): void {
  }

  addNewCustomer() {
    this.cs.addCustomer(this.customer)
      .then(() => {
        console.log("Customer was added")
        this.reset()
      })

      .catch((err: any) => console.log(err))
  } 

  reset() {
    this.customer = {FirstName: "", LastName: "", phone:"" , email: "" }

  }

  backToHome(): void {
    this.router.navigateByUrl('home')
  }

}
