import { Injectable } from '@angular/core';
import { addDoc, collection, collectionData, deleteDoc, doc, docData, Firestore, setDoc } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Customer } from '../interface/Customer';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
 

 customerRef = collection(this.firestore, 'customer');


  constructor(private firestore: Firestore) { }

  // add new Customer 
  addCustomer(customer: Customer): Promise<any> {
    return addDoc(this.customerRef, customer) as Promise<any>;
  }


  // get all Customer from db

  getCustomer(): Observable<Customer[]> {
    return collectionData(this.customerRef, { idField: "id" }) as Observable<Customer[]>
  }
 
  // update specific customer

  updateCustomer(newCustomer: Customer): Promise<any> {
    let customerRef = doc(this.firestore, `customer/${newCustomer.id}`)
    return setDoc(customerRef, newCustomer) as Promise<any>

  }

  showCard(Customer: Customer): Promise<any> {
    let customerRef = doc(this.firestore, `customer/${Customer.id}`)
    return setDoc(customerRef, Customer) as Promise<any>

  }

  // delete specific Customer
  deleteCustomer(customer: Customer) {
    let customerRef = doc(this.firestore, `customer/${customer.id}`)
    return deleteDoc(customerRef) as Promise<void>;
  }

  // get specific Customer by id
  getCustomerById(id: string): Observable<Customer> {
    let customerRef = doc(this.firestore, `customer/${id}`);
    return docData(customerRef, { idField: "id" }) as Observable<Customer>

  }

}
