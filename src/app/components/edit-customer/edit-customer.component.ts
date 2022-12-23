import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Customer } from 'src/app/interface/Customer';
import { CustomerService } from 'src/app/services/customer.service';


@Component({
  selector: 'app-edit-customer',
  templateUrl: './edit-customer.component.html',
  styleUrls: ['./edit-customer.component.css']
})
export class EditCustomerComponent implements OnInit {

  @Input() id!: string;
  customer: Customer = {FirstName: "", LastName: "", phone: "", email: ""}

  constructor(private cs: CustomerService, private activeModal: NgbActiveModal) { }

  ngOnInit(): void {

    this.cs.getCustomerById(this.id as string).subscribe({
      next: (customerData: Customer) => (this.customer = customerData),
    })
 
  }
  updateTheCustomer() {
    this.cs.updateCustomer(this.customer)
      .then(() => this.activeModal.close())
      .catch((err) => console.log(err))
  }
  
  reset() {
    this.customer = {FirstName: "", LastName: "", phone:"" , email: "" }

  }
 
}
