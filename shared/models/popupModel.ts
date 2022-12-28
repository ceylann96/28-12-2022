import { EventEmitter } from "@angular/core";

export interface PopupModel {
  isOpen: boolean;
  title: string;
  description?: string;
  icon?: string;
  leftButtonText?: string;
  rightButtonText?: string;
  rightButtonFunction?:void
}
