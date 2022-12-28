import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { CommonState } from 'src/app/shared/store/commonReducer';
import { createCustomer } from 'src/app/shared/store/customer/customer.actions';
import { environment } from 'src/environments/environment';
import { Customer } from '../models/customer';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  controllerUrl = `${environment.apiUrl}/customers`
  customerModel$:Observable<Customer> = this.store.select((state)=>state.customer)

  constructor(private httpClient: HttpClient, private store: Store<CommonState>) { }

  getByNationalityId(nationalityId: string): Observable<Customer> {
    return this.httpClient.get<Customer>(`${this.controllerUrl}?nationalityId=${nationalityId}`);
  }

  getById(id: number): Observable<Customer> {
    return this.httpClient.get<Customer>(`${this.controllerUrl}?id=${id}`);
  }

  add(customer: Customer): Observable<Customer> { // ekleyeceğimiz şey 2.parametre post işleminde.
    return this.httpClient.post<Customer>(this.controllerUrl,customer);
  }

  addState(customer:Customer) {

    this.store.dispatch(createCustomer(customer))
  }
  
  getList(): Observable<Customer[]>{
    return this.httpClient.get<Customer[]>(this.controllerUrl)
    }

  deleteCustomer(id: number): Observable<Customer> {
      return this.httpClient.delete<Customer>(
        `${this.controllerUrl}/${id}`
      );
    }

  updateCustomer(request: Customer): Observable<Customer> {
      return this.httpClient.put<Customer>(
        `${this.controllerUrl}/${request.id}`,
        request
      );
    }
}
