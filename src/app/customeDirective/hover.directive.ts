import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHover]'
})
export class HoverDirective {

  constructor(private element:ElementRef,private rendere:Renderer2) { }

@HostListener('mouseenter')onmouseover(){
  this.rendere.setStyle(this.element.nativeElement,'margin','5px 10px')
  this.rendere.setStyle(this.element.nativeElement,'padding','30px 30px')
  this.rendere.setStyle(this.element.nativeElement,'transition','0.5s')
  this.rendere.setStyle(this.element.nativeElement,'backgroundColor','pink')
}

@HostListener('mouseleave')onmouseout(){
  this.rendere.setStyle(this.element.nativeElement,'margin','5px 5px')
  this.rendere.setStyle(this.element.nativeElement,'transition','0.5s')
  this.rendere.setStyle(this.element.nativeElement,'backgroundColor','white')
}

}
