import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';

import { CustomersRoutingModule } from './customers-routing.module';
import { DemographicInfoComponent } from './pages/demographic-info/demographic-info.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SearchCustomerComponent } from './pages/search-customer/search-customer.component';
import { CustomerFilterPipe } from './pipes/customer-filter.pipe';
import { CustomerInfoComponent } from './pages/customer-info/customer-info.component';


@NgModule({
  declarations: [
    DemographicInfoComponent,
    SearchCustomerComponent,
    CustomerFilterPipe,
    CustomerInfoComponent
  ],
  imports: [
    CommonModule,
    CustomersRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [DemographicInfoComponent,SearchCustomerComponent],
  providers: [DatePipe, CustomerFilterPipe]
})
export class CustomersModule { }
