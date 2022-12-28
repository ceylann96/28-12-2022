import { createReducer, on } from '@ngrx/store';
import { Customer } from 'src/app/features/customers/models/customer';
import { createCustomer } from './customer.actions';

const initialState: Customer = {
    firstName: '',
    lastName: '',
    birthDate: Date.now().toString(),
    gender: '',
    nationalityId: undefined,
    
    id: 0,
    customerId: 0,
    middleName: '',
    role: '',
    motherName: '',
    fatherName: '',
    adresses: [],
    contactMedium: undefined,
    billingAccounts: []
};

export const customerReducer = createReducer(
  initialState,
  on(createCustomer, (state: Customer, action: Customer) => {
    return action;
  })
);































