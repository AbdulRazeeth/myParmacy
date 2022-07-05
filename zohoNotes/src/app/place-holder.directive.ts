import { Directive,ViewContainerRef,OnInit,Input,TemplateRef, ViewChild, HostListener, ElementRef } from '@angular/core';
import { DataService } from './data.service';

@Directive({
  selector: '[appPlaceHolder]'
})
export class PlaceHolderDirective implements OnInit {
  verifyValue:boolean =true
@ViewChild('input') inputElement!:any
  constructor(private viewContainer:ViewContainerRef,private template:TemplateRef<object>,private element:ElementRef ,public data:DataService) { }
  ngOnInit(): void {
    this.viewContainer.createEmbeddedView(this.template)
  }
}
