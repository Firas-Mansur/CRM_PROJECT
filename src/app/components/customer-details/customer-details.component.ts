import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Customer } from 'src/app/interface/Customer';
import { CustomerService } from 'src/app/services/customer.service';

@Component({
  selector: 'app-customer-details',
  templateUrl: './customer-details.component.html',
  styleUrls: ['./customer-details.component.css']
})
export class CustomerDetailsComponent implements OnInit {

  @Input() id!: string;

  customer: Customer = {FirstName: "", LastName: "", phone: "", email: ""}
  image!: string;




  constructor(private cs: CustomerService , private router:Router) { 
    {
      this.image = './assets/image.jpg';
    }
  } 

  

  ngOnInit(): void {
    
    this.cs.getCustomerById(this.id as string).subscribe({
      next: (customerData: Customer) => (this.customer = customerData),
    })
  }

  showTheCard() {
    this.cs.showCard(this.customer)

  }

}
