import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Task } from '../app.component';

@Component({
  selector: 'app-todo-task-list',
  templateUrl: './todo-task-list.component.html',
  styleUrls: ['./todo-task-list.component.css']
})
export class TodoTaskListComponent implements OnInit {

  @Input()
  todoTaskList: Task[] = [];

  @Output()
  doneTaskEmitter = new EventEmitter<number>();

  @Output()
  removeTaskEmitter = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
  }

  doTask(id: number){
    this.doneTaskEmitter.emit(id);
  }

  removeTask(id: number){
    this.removeTaskEmitter.emit(id);
  }

}
