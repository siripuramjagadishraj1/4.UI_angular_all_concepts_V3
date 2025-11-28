import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { Dashboard } from './loggedin/dashboard/dashboard';
import { UserList } from './loggedin/user-list/user-list';


const routes: Routes = [
    { path: 'dashBoard', component: Dashboard },
    { path: 'userList', component: UserList }
];

@NgModule({
  declarations: [ ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    Dashboard,UserList
  ]
})
export class NewLazyModuleModule { }
