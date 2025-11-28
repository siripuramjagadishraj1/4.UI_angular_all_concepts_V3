import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-nested-input',
  imports: [],
  templateUrl: './nested-input.html',
  styleUrl: './nested-input.css',
})
export class NestedInput implements OnInit {
  
  @Input('element') element:any;//{userId:number; userName:string; userType:string}; 
  
  constructor() { }

  ngOnInit() {
  }

}