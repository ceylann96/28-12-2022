import { Customer } from "src/app/features/customers/models/customer";
import { customerReducer } from "./customer/customer.reducer";

export const commonReducers = {
  customer:customerReducer,

}
export interface CommonState {
  customer:Customer
}