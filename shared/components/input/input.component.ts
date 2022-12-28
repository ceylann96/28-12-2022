import { Component, Input, OnInit } from '@angular/core';
import { ControlValueAccessor, FormGroup, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'etiya-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: InputComponent,
      multi: true,
    },
  ],
})
export class InputComponent implements ControlValueAccessor, OnInit {
  
  ngOnInit(): void {
    this.passwordToggle = this.inputType == 'password';
  }

 @Input() inputLabel!:string
 @Input() requiredField:boolean = false
 @Input() inputType:string = "text"
 @Input() icon1!: string;
 @Input() icon2!: string;
 @Input() value: any;

 @Input() name: string;
 @Input() form: FormGroup;
 
 @Input() setDisabled:boolean = false;

 disabled = false;

 onChange = (value: any) => {};
 onTouched = () => {};

//  public passwordToggle: boolean = false;
//  public passwordShow: boolean = true;

 public passwordToggle: boolean = true;
  public passwordShow: boolean = false;

 passwordToggleEvent() {
  this.passwordShow = !this.passwordShow;
  if (this.passwordShow) {
    this.inputType = 'text';
  } else {
    this.inputType = 'password';
  }
}

get className(): string {
  if (
    this.form &&
    this.form.get(this.name).invalid &&
    this.form.get(this.name).touched &&
    this.form.get(this.name).dirty
  ) {
    return 'ng-invalid';
  }
  return '';
}



setDisabledState(isDisabled: boolean): void {
  this.disabled = isDisabled;
}
writeValue(value: any): void {
  this.value = value;
  this.onChange(this.value);
}
registerOnChange(fn: any): void {
  this.onChange = fn;
}
registerOnTouched(fn: any): void {
  this.onTouched = fn;
}
markAsTouched(): void {
  this.onTouched();
}
}
