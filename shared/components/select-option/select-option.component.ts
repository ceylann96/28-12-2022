import { Component, Input } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'etiya-select-option',
  templateUrl: './select-option.component.html',
  styleUrls: ['./select-option.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: SelectOptionComponent,
      multi: true,
    },
  ],
})
export class SelectOptionComponent {

  @Input() inputLabel!: string;
  @Input() requiredField: boolean = false;
  @Input() inputType: string = 'text';
  @Input() value: any;

  @Input() setDisabled:boolean = false;
  disabled = false;

  onChange = (value: any) => {};
  onTouched = () => {};

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
