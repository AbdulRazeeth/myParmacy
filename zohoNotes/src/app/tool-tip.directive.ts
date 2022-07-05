import { Directive ,ElementRef,HostListener,Input, Renderer2} from '@angular/core';

@Directive({
  selector: '[ToolTip]'
})
export class ToolTipDirective {
  @Input()position:string="top"
  @Input("ToolTip") value!:any
  element!:HTMLElement;
  constructor(private el:ElementRef,private render:Renderer2) {
   }
  @HostListener("mouseenter") 
  enter(){
    let newTop!:number
    let newLeft!:Number
    this.element=this.render.createElement('div');
    this.element.innerText=this.value;
    this.render.appendChild(this.el.nativeElement,this.element);
    let pos = this.el.nativeElement.getBoundingClientRect();
    let elePos = this.element.getBoundingClientRect();
    let yPosition=this.el.nativeElement.getBoundingClientRect().top
    let xposition=this.el.nativeElement.getBoundingClientRect().left
    let widthOfParent=this.el.nativeElement.getBoundingClientRect().width
    let heightOfChild=this.element.getBoundingClientRect().height
    let heightOfParent=this.el.nativeElement.getBoundingClientRect().height
    if(this.position==='top'){
      newTop=yPosition-heightOfChild
      newLeft=xposition-(widthOfParent/2)
    }else if(this.position==="bottom"){
      newTop=yPosition+heightOfParent
      newLeft=xposition-(widthOfParent/2)
    }else if(this.position==="left"){
      newTop=yPosition+(heightOfParent/2)
      let widthOfChild=this.element.getBoundingClientRect().width
      newLeft=xposition-widthOfChild

      // newLeft = pos.x // - this.el.nativeElement.offsetWidth/2
      // newTop = pos.y

      // this.render.setStyle(this.element, "position", 'fixed')
      // this.render.setStyle(this.element, "left", pos.x - this.element.offsetWidth/2 + "px")
      // this.render.setStyle(this.element, "top", pos.y + "px")
    }
    else{
      newTop=yPosition+(heightOfParent/2)
      newLeft=xposition+widthOfParent
    }
    
    this.render.setStyle(this.element,'position','fixed')
    this.render.setStyle(this.element,'top',`${newTop}px`)
    this.render.setStyle(this.element,'left',`${newLeft}px`)
    
    this.render.setStyle(this.element,'fontSize','8px')
    this.render.setStyle(this.element,'backgroundColor',"#000")
    this.render.setStyle(this.element,'color','#fff')
    // this.render.setStyle(this.element,'border','1px solid #fff')
    this.render.setStyle(this.element,'padding','10px')


    




    
  }
  @HostListener("mouseleave")
  delete(){
    this.element.remove()
  }
}
