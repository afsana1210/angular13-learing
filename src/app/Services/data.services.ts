import { EventEmitter, Injectable } from "@angular/core";
import { Subject } from "rxjs";

@Injectable()
export class DataService{
    //  dataEmitter = new EventEmitter<string>();
    dataEmitter = new Subject<string>();     

     raisedDataEmitterEvent(data:string){
       this.dataEmitter.next(data)
     }
}