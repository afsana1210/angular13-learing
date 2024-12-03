import { Component, OnInit } from '@angular/core';
import { Customer } from './customer';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
   selectedCustomer:any;

   customers:Customer[] =[
    {customerNo:1,name:'Mark Vought',address: '',city: 'London',country:'UK'},
    {customerNo:2,name:'Mark Ann',address: '',city: 'New York',country:'USA'},
    {customerNo:3,name:'Varun Raj',address: '',city: 'Barlin',country:'GERMANY'},
    {customerNo:4,name:'Nikhil Khatri',address: '',city: 'Mumbai',country:'INDIA'},
    {customerNo:5,name:'Yougesh patel',address: '',city: 'Delhi',country:'INDIA'}
   ]
}
