import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.components'
import { UserComponent } from "./user/user.component";
import { NgFor,NgIf } from '@angular/common';
import { DUMMY_USERS } from './user/dummy-users';
import { TasksComponent } from "./tasks/tasks.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, UserComponent, TasksComponent,NgFor,NgIf],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  users = DUMMY_USERS;
  selectedUserId = 'u1';

  get selectedUser() {
    return this.users.find((user)=> user.id = this.selectedUserId)!;
  }

  onSelectUser(id:string) {
    this.selectedUserId = id
  }

}
