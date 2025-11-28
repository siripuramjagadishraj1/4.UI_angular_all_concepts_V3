import { Component, OnInit } from '@angular/core';
import { MyCustomPipePipe } from '../../my-custom-pipe-pipe';

@Component({
  selector: 'app-custom-pipes',
  imports: [MyCustomPipePipe],
  templateUrl: './custom-pipes.html',
  styleUrl: './custom-pipes.css',
})
export class CustomPipes implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
