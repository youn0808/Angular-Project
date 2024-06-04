import { Component } from '@angular/core';
import { Input } from '@angular/core';
import { dummyTasks } from './dummy-tasks';
@Component({
  selector: 'app-task',
  standalone: true,
  imports: [],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})

export class TaskComponent {
  @Input() name!:String;
}
