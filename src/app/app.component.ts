import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'todo-list';

  todoTaskList = new Array<Task>();

  doneTaskList = new Array<Task>();
  doneTaskCounter: number = 0;

  // private taskExists(element: Task, index: number, array: Task[]){
  //   console.log(element.name);
  //   console.log(this.newTaskName);
  //   console.log('===========');
  //   return element.name == this.newTaskName;
  // }
  // private checkNewTask(){
  //   if (this.newTaskName == '' || this.todoTaskList.some(this.taskExists))
  //     return false;
  //   return true;
  // }

  addedTask(taskName: string){
    // if (this.checkNewTask())
      this.todoTaskList.push(new Task(taskName));
  }

  removedTask(index: number){
    return this.todoTaskList.splice(index,1)[0];
  }

  doneTask(index: number){
    let removed = this.removedTask(index);
    this.doneTaskList.push(removed);
    this.doneTaskCounter++;
  }

}

export class Task{
  constructor(public name: string){};
}
