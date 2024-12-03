import { Directive, ElementRef, HostBinding, HostListener, Input, Renderer2 ,OnInit} from '@angular/core';

@Directive({
  selector: '[appBetterhighlight]'
})
export class BetterhighlightDirective implements OnInit{

  constructor(private element:ElementRef,private renderer:Renderer2) { }

  @Input() defaultBackgroundColor:string ='transparent';
  @Input() defaultBorder:string='none'
  @Input() highlightColor:string ='pink';


  @HostBinding('style.backgroundColor') background:string = this.defaultBackgroundColor;
  @HostBinding('style.border') border:string =this.defaultBorder

  ngOnInit(){
    this.background = this.defaultBackgroundColor;
    }

  @HostListener('mouseenter')onmouseover(){
    this.background = this.highlightColor;
    this.border ='2px solid black';
  }
  @HostListener('mouseleave')onmouseout(){
    this.background = this.defaultBackgroundColor;
    this.border =this.defaultBorder
  }

}
