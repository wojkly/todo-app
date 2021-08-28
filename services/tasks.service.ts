import { Injectable } from '@angular/core';
import { MyTask } from 'models/myTask';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable()
export class TasksService {


  private todoTaskList = new Array<MyTask>();
  private doneTaskList = new Array<MyTask>();
  private todoListObserver = new BehaviorSubject<Array<MyTask>>(this.todoTaskList);
  private doneListObserver = new BehaviorSubject<Array<MyTask>>(this.doneTaskList);

  addNewTask(taskName: string){
    this.todoTaskList.push({name: taskName, created: new Date()});
    this.todoListObserver.next(this.todoTaskList);
  }

  removeTask(index: number){
    this.todoListObserver.next(this.todoTaskList);
    return this.todoTaskList.splice(index,1)[0];
  }

  doTask(index: number){
    let removed = this.removeTask(index);
    removed.completed = new Date();
    this.doneTaskList.push(removed);
    this.doneListObserver.next(this.doneTaskList);
  }

  getTodoListObserver(): Observable<Array<MyTask>>{
    return this.todoListObserver.asObservable();
  }
  getDoneListObserver(): Observable<Array<MyTask>>{
    return this.doneListObserver.asObservable();
  }

}


