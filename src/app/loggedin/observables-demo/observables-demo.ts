import { CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-observables-demo',
  imports: [CommonModule],
  templateUrl: './observables-demo.html',
  styleUrl: './observables-demo.css',
})
export class ObservablesDemo implements OnInit, OnDestroy {

  testSubject:Subject<number> = new Subject();

  constructor() { }

  showtestSubject(){
    this.testSubject.next(Math.round((Math.random() * 100)));
  }

  ngOnInit() {
    this.testSubject.subscribe(
      (data) =>{console.log(data)}

    );
  }

  ngOnDestroy(){
    this.testSubject.unsubscribe();
  }

}

