import { Component, Input, OnInit } from '@angular/core';
import { Task } from '../app.component';
@Component({
  selector: 'app-done-task-list',
  templateUrl: './done-task-list.component.html',
  styleUrls: ['./done-task-list.component.css']
})
export class DoneTaskListComponent implements OnInit {

  @Input()
  doneTaskList: Task[] = [];
  
  @Input()
  doneTaskCounter: number = 0;

  constructor() { }

  ngOnInit(): void {
  }

}
