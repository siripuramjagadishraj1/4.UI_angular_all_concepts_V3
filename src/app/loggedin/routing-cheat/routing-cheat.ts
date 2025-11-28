import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-routing-cheat',
  imports: [RouterOutlet, RouterLink],
  templateUrl: './routing-cheat.html',
  styleUrl: './routing-cheat.css',
})
export class RoutingCheat implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
