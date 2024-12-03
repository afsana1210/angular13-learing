import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-productcomp',
  templateUrl: './productcomp.component.html',
  styleUrls: ['./productcomp.component.css']
})
export class ProductcompComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  onProductCreate(products:{pname:string,desc:string,price:number}){
   console.log(products);
   
  }
}
