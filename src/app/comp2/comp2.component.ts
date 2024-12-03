import { Component, OnInit } from '@angular/core';
import { DataService } from '../Services/data.services';
import { interval, Subscription } from 'rxjs';

@Component({
  selector: 'app-comp2',
  templateUrl: './comp2.component.html',
  styleUrls: ['./comp2.component.css']
})
export class Comp2Component implements OnInit {

  constructor(private dataService:DataService) { }
  counterObservable = interval(500);
  counterobs!: Subscription;
  enteredText:string='';

  ngOnInit(): void {
    // this.counterobs=this.counterObservable.subscribe((val)=>{
    //   console.log(val);
      
    // })
  }
  subscribe(){
    this.counterobs=this.counterObservable.subscribe((val)=>{
      console.log(val);  
    })
  }

  unsubscribe(){
    this.counterobs.unsubscribe();
  }
  
 

onBtnClick(){
  this.dataService.raisedDataEmitterEvent(this.enteredText)
}

}
