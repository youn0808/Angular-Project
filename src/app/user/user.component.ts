import { Component,EventEmitter,Input, Output } from '@angular/core';
import { User } from './user.model';
// type User = {
//   id:String;
//   avatar: string;
//   name:String;
// }

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  @Input({required:true}) user! :User;
  @Input({required:true}) selected!:boolean;
  @Output() selectedOne = new EventEmitter();

  get imagePath() {
    return 'assets/users/'+this.user.avatar;
  }

  onSelectUser() { 
     this.selectedOne.emit(this.user.id)
  }
}
