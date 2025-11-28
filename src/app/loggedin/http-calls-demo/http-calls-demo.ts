import { Component, OnInit } from '@angular/core';
import { GlobalServices } from '../../global-services';

@Component({
  selector: 'app-http-calls-demo',
  imports: [],
  templateUrl: './http-calls-demo.html',
  styleUrl: './http-calls-demo.css',
})
export class HttpCallsDemo implements OnInit {

  constructor(private service:GlobalServices) { }

  ngOnInit() {
  }

  getClick(){
    this.service.getAllPlantsList().subscribe(
      (data) => {console.log(data)}
    );
  }
}
