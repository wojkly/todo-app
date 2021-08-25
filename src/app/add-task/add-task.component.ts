import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {

  taskName = '';

  @Output()
  newTaskEmitter = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  addTask(){
    this.newTaskEmitter.emit(this.taskName);
    this.taskName = '';
  }

}
