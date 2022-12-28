import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-background-template',
  templateUrl: './background-template.component.html',
  styleUrls: ['./background-template.component.scss']
})
export class BackgroundTemplateComponent {
  @Input() width!: string;
  @Input() height!: string;
  @Input() margin?:string
}
