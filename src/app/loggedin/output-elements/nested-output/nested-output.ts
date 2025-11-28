import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-nested-output',
  imports: [],
  templateUrl: './nested-output.html',
  styleUrl: './nested-output.css',
})
export class NestedOutput implements OnInit {

@Input('element') element:string="Hello";
@Output() generatedEvent = new EventEmitter<{name:string,type:string}>();

generateEvent(){
    this.generatedEvent.emit({name: 'good Name', type: 'good Name'});
}

  constructor() { }

  ngOnInit() {
  }

}
