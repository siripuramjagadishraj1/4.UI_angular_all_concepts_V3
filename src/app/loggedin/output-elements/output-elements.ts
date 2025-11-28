import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { NestedOutput } from './nested-output/nested-output';

@Component({
  selector: 'app-output-elements',
  imports: [CommonModule, NestedOutput],
  templateUrl: './output-elements.html',
  styleUrl: './output-elements.css',
})
export class OutputElements implements OnInit {

  eachElement:string = "Jagadish";
  constructor() { }

  ngOnInit() {
  }

  eventGenerated(event:any){
    console.log(event);
  }

}