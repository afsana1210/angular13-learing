import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  products=[
    {id:1,name:'Digital watch' ,price:5000,color:'Black',available:'Available',image:'/assets/1-digital-sports-men-s-kids-watch-for-boys-watch-for-men-digital-original-imahydw9dddkmzfk.webp'},
    {id:2,name:'Kids watch' ,price:2000,color:'Black',available:'Not Available',image:'/assets/61ZjlBOp+rL.jpg'},
    {id:3,name:'kids watch for boys' ,price:1500,color:'Black',available:'Available',image:'/assets/71H+kQzFIiL._AC_UY1000_.jpg'},
    {id:4,name:'Digital kids watch' ,price:3000,color:'Black',available:'Not Available',image:'/assets/f98fb842-58a0-477e-9448-956821729a101677146618712DanielKleinWomenRoseGoldAnalogueWatchDK11467-31.jpg'},
    {id:5,name:'mobile' ,price:35000,color:'Black',available:'Not Available',image:'/assets/CKS-Mobiles-000140_1-1663849255.jpg',}
  ]
}
