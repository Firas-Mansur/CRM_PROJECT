import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Customer } from 'src/app/interface/Customer';
import { CustomerService } from 'src/app/services/customer.service';
import { CustomerDetailsComponent } from '../customer-details/customer-details.component';
import { EditCustomerComponent } from '../edit-customer/edit-customer.component';

@Component({
  selector: 'app-show-customers',
  templateUrl: './show-customers.component.html',
  styleUrls: ['./show-customers.component.css']
})
export class ShowCustomersComponent implements OnInit {

  customers: Customer[] = []
  FirstName: string = ""
  LastName: string = ""
  phone: string = ""




  constructor(private cs: CustomerService, private modal: NgbModal) { }

  ngOnInit(): void {

    this.cs.getCustomer().subscribe({
      next: (customerData: Customer[]) => (this.customers = customerData),
    }); 
  }
  showCard(customer: Customer) {
    let modalRef = this.modal.open(CustomerDetailsComponent, {
      size: 'lg',
      centered: true,
      windowClass: 'dark-modal',
    });
    modalRef.componentInstance.id = customer.id;
  }


  deleteCustomer(customer: Customer) {
    if (confirm("Are You Sure?")) {
      this.cs.deleteCustomer(customer)
        .then(() => console.log("Customer was deleted"))
        .catch((err) => console.log(err))

    }
  } 

  updateCustomer(customer: Customer) {
    let modalRef = this.modal.open(EditCustomerComponent, {
      size: 'lg',
      centered: true,
      windowClass: 'dark-modal',
    });
    modalRef.componentInstance.id = customer.id;
  }

}
