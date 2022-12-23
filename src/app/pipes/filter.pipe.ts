import { Pipe, PipeTransform } from '@angular/core';
import { Customer } from '../interface/Customer';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(custumers: Customer[], propName: keyof Customer, value: string): Customer[] {
    let filteredCustomer: Customer[] = []
    for (let customer of custumers) {
      if ((customer[propName] as string).toString().includes(value.toString())) {
        filteredCustomer.push(customer);
      }
    }

    return filteredCustomer;
  }

} 
