import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-bindings',
  imports: [CommonModule, FormsModule],
  templateUrl: './bindings.html',
  styleUrl: './bindings.css',
})
export class Bindings implements OnInit {

  constructor() { }

  oneWayBinded:string = "One Way Binded...";
  twoWayBinded:string = "Two way binded...";
  idWayBinded:string = "Id way binded...";

  ngOnInit() {
  }

}
