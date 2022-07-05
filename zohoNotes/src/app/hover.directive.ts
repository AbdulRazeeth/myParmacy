import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHover]'
})
export class HoverDirective{

  constructor(private element:ElementRef,private renderer:Renderer2) { }
  @HostListener ('mouseenter')
   enter(){
    console.log('Mouse enter')
    let span = this.element.nativeElement.querySelector('span')
    this.renderer.setStyle(span,'display','flex')
  }
  @HostListener ('mouseleave')
   exit(){
    console.log('Mouse enter')
    let span = this.element.nativeElement.querySelector('span')
    this.renderer.setStyle(span,'display','none')
  }
}
