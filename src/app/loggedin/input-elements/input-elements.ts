import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { NestedInput } from './nested-input/nested-input';

@Component({
  selector: 'app-input-elements',
  imports: [CommonModule, NestedInput],
  templateUrl: './input-elements.html',
  styleUrl: './input-elements.css',
})
export class InputElements implements OnInit {

  singleItem:MainUsers = {userId:1, userName:"Jagadish", userType:"ADMIN"};
  
  userList:Array<MainUsers> = [
    {userId:1, userName:"Jagadish", userType:"ADMIN"},
    {userId:2, userName:"Rohit", userType:"ADMIN"},
    {userId:3, userName:"Rajaneesh", userType:"DEFAULT"},
    {userId:4, userName:"Sohan", userType:"VIEWER"},
        ];

  constructor() { }

  ngOnInit() {
  }

}

export interface MainUsers{
  userId:number;
  userName:string;
  userType:string;
}
