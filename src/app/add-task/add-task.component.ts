import { Component } from '@angular/core';
import { TasksService } from 'services/tasks.service';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})

export class AddTaskComponent {
    taskName = '';
    
  constructor(private tasksService: TasksService) { }

  addTask(){
    this.tasksService.addNewTask(this.taskName);
    this.taskName = '';
  }

}
// export class AddTaskComponent implements OnInit {

//   taskName = '';

//   @Output()
//   newTaskEmitter = new EventEmitter<string>();

//   constructor() { }

//   ngOnInit(): void {
//   }

//   addTask(){
//     this.newTaskEmitter.emit(this.taskName);
//     this.taskName = '';
//   }

// }
