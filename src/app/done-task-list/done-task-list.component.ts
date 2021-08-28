import { Component } from '@angular/core';
import { TasksService, MyTask } from 'services/tasks.service';
@Component({
  selector: 'app-done-task-list',
  templateUrl: './done-task-list.component.html',
  styleUrls: ['./done-task-list.component.css']
})
export class DoneTaskListComponent {
    doneTaskList: Array<MyTask> = [];
    doneTaskCounter: number = 0;

    constructor(private tasksService: TasksService) { 
      this.tasksService.getDoneListObserver().subscribe((tasks: Array<MyTask>) => {
        this.doneTaskList = tasks;
        this.doneTaskCounter = this.doneTaskList.length;
      });
  }

}
