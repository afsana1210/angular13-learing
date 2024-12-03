import { Component, OnInit ,ViewChild} from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-templatedrivenform',
  templateUrl: './templatedrivenform.component.html',
  styleUrls: ['./templatedrivenform.component.css']
})
export class TemplatedrivenformComponent implements OnInit {

  constructor() { }
  
  @ViewChild('myForm')
  form!: NgForm;

  ngOnInit(): void {
  }
  onSubmit(){
    console.log(this.form);
    
  }
}
