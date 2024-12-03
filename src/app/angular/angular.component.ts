import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-angular',
  templateUrl: './angular.component.html',
  styleUrls: ['./angular.component.css']
})
export class AngularComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  courses=[
    {id:1,name:'Angular for beginner', author:'Pramod Deshmukh', duration:28,type:'Premium',price:545,rating:4.5,image:"/assets/Javascript.png",description:"In this course you will learn the fundamentals of Angular technology"},
    {id:2,name:'React for beginner', author:'Abdullah khna', duration:30,type:'Free',price:0,rating:4.0,image:"/assets/ReactJS.jpg",description:"In this course you will learn the fundamentals of REact technology"},
    {id:3,name:'Mater Javascript from Zero to Hero', author:'Alina Dsoza', duration:60,type:'Premium',price:899,rating:5.0,image:"/assets/JS.jpeg",description:"In this course you will learn the fundamentals of Javascript technology"},
    {id:4,name:'Nodejs for Intermediate', author:'Salina Sood', duration:35,type:'Free',price:0,rating:4.2,image:"/assets/nodejs.jpeg",description:"In this course you will learn the fundamentals of Nodejs technology."},
    {id:5,name:'NextJS Course', author:'Jaya shankar', duration:40,type:'Premium',price:800,rating:3.2,image:"/assets/NextJS.jpg",description:"In this course you will learn the fundamentals of NextJS technology."},
    {id:6,name:'UX Design course', author:'Prerna Deshpande', duration:50,type:'Free',price:0,rating:4.4,image:"/assets/course-3-4.png",description:"In this course you will learn the fundamentals of UX Design."}
  ]
}
