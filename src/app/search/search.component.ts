import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  searchValue:string="";

  changeSearchValue(Data:Event){
    console.log((<HTMLInputElement>Data.target).value)
    this.searchValue =(<HTMLInputElement>Data.target).value
  }
  

}
