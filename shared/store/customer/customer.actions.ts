import { createAction, props } from "@ngrx/store";
import { Customer } from "src/app/features/customers/models/customer";

export const createCustomer = createAction(
  '[Customer] Create Customer',
  props<Customer>()
)
