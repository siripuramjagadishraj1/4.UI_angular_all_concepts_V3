import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-local-references-and-tricks',
  imports: [],
  templateUrl: './local-references-and-tricks.html',
  styleUrl: './local-references-and-tricks.css',
})
export class LocalReferencesAndTricks implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  serverId:string = "ServerID-String..Example"
  getServerStatus(){
    return 'getServerStatus--Example';
  }

}
