import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AddTaskComponent } from './add-task/add-task.component';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DoneTaskListComponent } from './done-task-list/done-task-list.component';
import { TodoTaskListComponent } from './todo-task-list/todo-task-list.component';

@NgModule({
  declarations: [
    AppComponent,
    AddTaskComponent,
    DoneTaskListComponent,
    TodoTaskListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
