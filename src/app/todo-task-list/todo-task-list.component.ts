import { Component } from '@angular/core';
import { MyTask } from 'models/myTask';
import { TasksService } from 'services/tasks.service';

@Component({
  selector: 'app-todo-task-list',
  templateUrl: './todo-task-list.component.html',
  styleUrls: ['./todo-task-list.component.css']
})

export class TodoTaskListComponent {
    todoTaskList: Array<MyTask> = [];

    constructor(private tasksService: TasksService) { 
        this.tasksService.getTodoListObserver().subscribe((tasks: Array<MyTask>) => {
          this.todoTaskList = tasks;
        });
    }

  doTask(id: number){
    this.tasksService.doTask(id);
  }

  removeTask(id: number){
    this.tasksService.removeTask(id);
  }
}
