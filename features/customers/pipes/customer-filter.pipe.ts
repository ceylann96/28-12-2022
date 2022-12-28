import { Pipe, PipeTransform } from '@angular/core';
import { last } from 'rxjs';

import { Customer } from '../models/customer';

@Pipe({
  name: 'customerFilterPipe',
})
export class CustomerFilterPipe implements PipeTransform {
  transform(
    customer: Customer[],
    nationalityId: number,
    id: number,
    firstName: string,
    lastName: string,
    gsmNumber: string,
    orderNumber: number,
    accountNumber: string,
  ): Customer[] {
    let filteredCustomer: Customer[] = customer;
    let emptyCustomer: Customer[] = []

    console.log(accountNumber)

    if (firstName == '' && lastName == '' && gsmNumber == '' && orderNumber == null && id == null && nationalityId == null && accountNumber == "") {
      return emptyCustomer;
    }
    if (firstName != '') {
      filteredCustomer = filteredCustomer.filter((c) =>
        c.firstName.toLowerCase().includes(firstName.toLowerCase())
      );
    }
    if (lastName != '') {
      filteredCustomer = filteredCustomer.filter((c) =>
        c.lastName.toLowerCase().includes(lastName.toLowerCase())
      );
    }
    if (id != null) {
      filteredCustomer = filteredCustomer.filter((c) => c.id == id);
    }
    if (nationalityId != null) {
      filteredCustomer = filteredCustomer.filter(
        (c) => c.nationalityId == nationalityId
      );
    }
    if (gsmNumber != '') {
      filteredCustomer = filteredCustomer.filter((c) =>
      c.contactMedium.mobilePhone
          .toLowerCase()
          .includes(gsmNumber.toLowerCase())
      );
    }

   if (accountNumber != '') {
      filteredCustomer = filteredCustomer.filter(c => c.billingAccounts && c.billingAccounts.find(b => b.accountNumber.toLowerCase().includes(accountNumber.toLowerCase())) != null);
    }


    if (orderNumber != null) {
      filteredCustomer = filteredCustomer.filter(
        (c) =>
          c.billingAccounts.find(
            (b) => b.orders.find((o) => o.orderNumber == orderNumber) != null
          ) != null
      );
    }






    return filteredCustomer;
  }
}