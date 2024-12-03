import { Component, OnChanges, OnInit,Input,SimpleChange, ContentChild, ElementRef,AfterContentInit} from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent implements OnInit{

  @Input() value:string='procademy';

  
  constructor() { 
    console.log("constructor called");
    // console.log(this.value);
    
    
  }
  @ContentChild('paragarph') paragarphEl:ElementRef | undefined;

  ngOnInit(): void {
    console.log('ngOnInit called');
    
  }
  ngOnChanges(change:SimpleChange){
    console.log('ngOnChanges called');
    console.log(change);
    
    
  }
  ngAfterContentInit(){
    console.log(this.paragarphEl?.nativeElement.textContent);    
  }
  
   sayHello(inputEl:HTMLInputElement){
     alert('Hello' + ' '+ inputEl.value )
   }

   greet(){
    alert('Hello askansk')
   }
}
