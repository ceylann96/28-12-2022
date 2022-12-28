import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PopupModel } from 'src/app/shared/models/popupModel';
import { PopUpService } from 'src/app/shared/services/pop-up.service';
import { Customer } from '../../models/customer';
import { CustomerService } from '../../services/customer.service';

@Component({
  templateUrl: './demographic-info.component.html',
  styleUrls: ['./demographic-info.component.scss']
})
export class DemographicInfoComponent implements OnInit {
  
  demographicInfoForm!: FormGroup;
  show: boolean = false;

  formCustomer!:Customer
  dbCustomer!:Customer
  customerToUpdate!:Customer

  constructor(private formBuilder: FormBuilder,private datePipe: DatePipe,
    private popUpService: PopUpService, private customerService: CustomerService,
    private router: Router) {}
  
    ngOnInit(): void {
      this.createDemographicInfoForm();
      this.subs();
      this.getCustromerFromState()
  }

  getCustromerFromState(){
    this.customerService.customerModel$.subscribe((response)=>{
      this.customerToUpdate = response
      this.demographicInfoForm.patchValue(this.customerToUpdate)
    })
  }

  createDemographicInfoForm(): void {
    let date = this.datePipe.transform(new Date(), 'yyyy-MM-dd');
    this.demographicInfoForm = this.formBuilder.group({
      // can be changed
      firstName: ['', [Validators.required, Validators.minLength(2)]],
      middleName: [''],
      lastName: ['', [Validators.required, Validators.minLength(2)]],
      birthDate: [date, [Validators.required]],
      gender: ['', Validators.required],
      fatherName: [''],
      motherName: [''],
      nationalityId: ['', [Validators.required,Validators.minLength(11)]],
    });
  }

  subs() {
    this.popUpService.isPopUp.subscribe((response) => {
      this.show = response.isOpen;
      // console.log(this.show);
    });
  }

  onDemographicInfoSubmit() {
    if (this.demographicInfoForm.invalid) {
      // console.log(this.demographicInfoForm);
      let p: PopupModel = { isOpen: true, title: 'Warning',icon:'fa-sharp fa-solid fa-circle-exclamation',description:'A customer is already exist with this Nationality ID',leftButtonText:'Cancel',rightButtonText:'Delete'};
      this.popUpService.startPopUp(p);
      // console.log('çalıştı');
      return;
    }

    let currentNationalityId = this.demographicInfoForm.value.nationalityId
    this.customerService.getByNationalityId(currentNationalityId).subscribe((response)=>{
      this.dbCustomer  = response

    })
    this.formCustomer = this.getDataFromForm()

    if(this.formCustomer != this.dbCustomer){

      this.customerService.addState(this.formCustomer)

      this.router.navigateByUrl('/customer/address_info')

      return
    }
}

getDataFromForm():Customer{
  const customer:Customer = {
    ...this.demographicInfoForm.value,
      firstName: this.demographicInfoForm.value.firstName,
      middleName:this.demographicInfoForm.value.middleName,
      lastName : this.demographicInfoForm.value.lastName ,
      birthDate:this.demographicInfoForm.value.birthDate,
      gender:this.demographicInfoForm.value.gender,
      fatherName:this.demographicInfoForm.value.fatherName,
      motherName:this.demographicInfoForm.value.motherName,
      nationalityId:Number(this.demographicInfoForm.value.nationalityId),
      // name:this.demographicInfoForm.value.name.trim()
    }
    Object.keys(customer).map(
      (k) =>
        (customer[k] =
          typeof customer[k] == 'string' ? customer[k].trim() : customer[k])
    );
    return customer
}
}