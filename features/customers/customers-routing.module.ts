import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerInfoComponent } from './pages/customer-info/customer-info.component';
import { DemographicInfoComponent } from './pages/demographic-info/demographic-info.component';
import { SearchCustomerComponent } from './pages/search-customer/search-customer.component';

const routes: Routes = [
  {path:'customer',
  children:[
    {path:'',pathMatch:'full',component:DemographicInfoComponent},
    {path:'demographic_info',component:DemographicInfoComponent},
    {path: ':id/customer_info', component: CustomerInfoComponent}
    
  ]},  {path:'searchCustomer',component:SearchCustomerComponent},
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomersRoutingModule { }
