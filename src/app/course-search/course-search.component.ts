import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-course-search',
  templateUrl: './course-search.component.html',
  styleUrls: ['./course-search.component.css']
})
export class CourseSearchComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  enterdSearchValue:string='';

  @Output()
  searchTextChanged:EventEmitter<string> = new EventEmitter<string>();

  onSearchTextChanged(){
    this.searchTextChanged.emit(this.enterdSearchValue)
  }
}
