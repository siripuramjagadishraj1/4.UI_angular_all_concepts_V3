import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { HighlightDirective } from '../../highlight-directive';

@Component({
  selector: 'app-directives-custom',
  imports: [CommonModule, HighlightDirective],
  templateUrl: './directives-custom.html',
  styleUrl: './directives-custom.css',
})
export class DirectivesCustom implements OnInit {

  ngIfTest = true;
  ngForTest = ["Sai","Kumar"];

  constructor() { }

  ngOnInit() {
  }

}