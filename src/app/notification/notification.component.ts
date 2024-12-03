import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-notification',
  // templateUrl: './notification.component.html',
  // using template only we can write html inside it  
  // using backtick we can write html on different lines
  // <div class="notification-div" [hidden]="displaynotification">
  template:`<div class="notification-div" [ngClass]="{fadeOut:displaynotification}">
              <p>This website uses cookies foe better user experience</p>
              <div class="close"><button (click)="clickedNotification()">X</button></div>
            </div>`,
  // styleUrls: ['./notification.component.css']
  styles:[".notification-div{marging:1px0 0px;padding:10px 20px;background-color:#FAD7A0;text-align:center;}",
    "p{font-size:14px}",".close{float:right;margin-top:-30px}",
    ".fadeOut{visibility : hidden;opacity:0;transition: visibility 0s 2s,opacity 2s linear;}"
  ]
})
export class NotificationComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  displaynotification:boolean=false;

  clickedNotification(){
    this.displaynotification=true;
  }

}
