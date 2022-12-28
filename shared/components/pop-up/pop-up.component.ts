import { outputAst } from '@angular/compiler';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Customer } from 'src/app/features/customers/models/customer';
import { PopupModel } from '../../models/popupModel';
import { PopUpService } from '../../services/pop-up.service';

@Component({
  selector: 'etiya-pop-up',
  templateUrl: './pop-up.component.html',
  styleUrls: ['./pop-up.component.scss']
})
export class PopUpComponent implements OnInit {

  constructor(private popUpService:PopUpService) {}
  
  ngOnInit(): void {
    this.showPopUp()
  }

  @Input() rightButtonFunction!:void

  @Output() isClickedRightButton= new EventEmitter<any>();
  
popUp!:PopupModel;   
// show:boolean = false;

// @Output() onAddToCartClick = new EventEmitter<PopupModel>();
// addToCartClick() {
//  this.onAddToCartClick.emit(this.popUp1)
  
// }

showPopUp() {
  this.popUpService.isPopUp.subscribe((response)=> {
 this.popUp = response;
 
//  isOpen = this.popUp1
 console.log(response);
 
  })
  }
  closePopUp() {
    this.popUp.isOpen = false;
    this.popUpService.stopPopUp();
  }

  closePopUp1(event: Event) {
    this.isClickedRightButton.emit(event)
  }
    

  

}
