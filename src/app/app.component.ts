import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { DemoComponent } from './demo/demo.component';
import { UserService } from './Services/user.services';
import { LoggerService } from './Services/logger.services';
import { from, observable, Observable, of } from 'rxjs';
import {filter, map} from 'rxjs/operators'
import { DataService } from './Services/data.services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[UserService,LoggerService,DataService]
})
export class AppComponent implements OnInit{
  // title = 'AngularBasics....';
  // content = 'Angular content';

  title = 'ViewChild';

  constructor(private userService:UserService,private logger:LoggerService,private datatService:DataService){}
  users:{name:string,status:string}[]=[];

  inputText:string='';

  @ViewChild('dobInput')
  dateOfBirth!: ElementRef;
  @ViewChild('ageInput')
  age!: ElementRef;
  @ViewChild(DemoComponent)
  demoComp!: DemoComponent;
  
  // myObservable = new Observable((observer)=>{
  //   console.log("Observable started");
  //   setTimeout(()=>{observer.next("1");},1000)
  //   setTimeout(()=>{observer.next("2");},2000)
  //   // setTimeout(()=>{observer.error(new Error("something went wrong.pleas try again later."));},3000)
  //   setTimeout(()=>{observer.next("3");},3000)
  //   setTimeout(()=>{observer.next("4");},4000)
  //   setTimeout(()=>{observer.complete()})
  //   setTimeout(()=>{observer.next("5");},5000)
    
    
  //   // observer.next("2");
  //   // observer.next("3");
  //   // observer.next("4");
  //   // observer.next("5");
  // })

  // myObserver = Observable.create((observer:any)=>{
  //   console.log("Observable started");
  //   setTimeout(()=>{observer.next("1");},1000)
  //   setTimeout(()=>{observer.next("2");},2000)
  //   // setTimeout(()=>{observer.error(new Error("something went wrong.pleas try again later."));},3000)
  //   setTimeout(()=>{observer.next("3");},3000)
  //   setTimeout(()=>{observer.next("4");},4000)
  //   setTimeout(()=>{observer.complete()},3000)
  //   setTimeout(()=>{observer.next("5");},5000)
  // })

  arr1=[1,2,3,4];
  arr2=['A','B','C','D']

  // myObservable=of(this.arr1,this.arr2,29,'hello')

  myObservable=from(this.arr1);

  transformOb=this.myObservable.pipe(map((val)=>{
  return val * 5;
  }),filter((val)=>{
    return val > 10; }))

  // filterObs=this.transformOb.pipe(filter((val)=>{
  //   return val > 10;
  // }))

  calculateAge(){
    let birthYear = new Date(this.dateOfBirth.nativeElement.value).getFullYear();
    let currentYear = new Date().getFullYear();
    let age = currentYear - birthYear
    this.age.nativeElement.value = age;
    console.log(this.dateOfBirth);
    
  }

  onSubmit(inputEl:HTMLInputElement){
    this.inputText = inputEl.value;
  }

  ngOnInit(): void {
    this.users = this.userService.users;
    console.log(this.users);
    this.transformOb.subscribe((val: any)=>{
      console.log(val); 
    },(error: { message: any; })=>{
      alert(error.message)
    },()=>{
      alert('Observale complete emitting all values.')
    })
    


    
  }
}
