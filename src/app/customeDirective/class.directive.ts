import { Directive, ElementRef, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appClass]'
})
export class ClassDirective {

  constructor(private element:ElementRef,private rendere:Renderer2) { }

  @Input() set display(value:Object){
   let entries = Object.entries(value)
   console.log(entries);
   
  }

}
