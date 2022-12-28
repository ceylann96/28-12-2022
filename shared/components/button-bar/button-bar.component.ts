import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'etiya-button-bar',
  templateUrl: './button-bar.component.html',
  styleUrls: ['./button-bar.component.scss']
})
export class ButtonBarComponent {
  // @Input() buttonColor:string ="orange"
  // @Input() buttonText!:string | undefined;
  // @Input() buttonType!: string;

  // @Output() onClickButton = new EventEmitter<any>();
   
  // onClick(event: Event) {
  // this.onClickButton.emit(event);
  // }

  @Input() button1Clicked:boolean = false;
  @Input() button2Clicked?:boolean = false;
  @Input() button3Clicked?:boolean = false;
  @Input() button4Clicked?:boolean = false;

}
