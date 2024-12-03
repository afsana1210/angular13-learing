import { Injectable } from "@angular/core"
import { LoggerService } from "./logger.services"

@Injectable()
export class UserService{
    constructor(private logger:LoggerService){

    }
 users =[
    {name:'john',status:"active"},
    {name:'janny',status:"inactive"},
    {name:'Adam',status:"active"}
 ]
 AddNewUser(name:string,status:string){
  this.users.push({name:name,status:status})
  this.logger.LogMessage(name,status)
 }
}