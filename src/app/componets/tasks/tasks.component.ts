import { Component } from '@angular/core';
import { Task } from '../../Task';
import { CommonModule } from '@angular/common';
import { TaskItemComponent } from '../task-item/task-item.component';
import { TaskService } from '../../services/task.service'; 
import { AddTaskComponent } from '../add-task/add-task.component';

@Component({
  selector: 'app-tasks',
  imports: [CommonModule, TaskItemComponent, AddTaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {
  tasks: Task[] = [];

  constructor(private taskService: TaskService) {} //added the TaskService as a provider inside the constuctor, so we can use it

  ngOnInit(): void {
    //we use it inside here cos this fires off immediately
    this.taskService.getTasks().subscribe((tasks) => this.
    tasks = tasks); 
  }

  deleteTask(task: Task) {
    this.taskService
    .deleteTask(task)
    .subscribe(
      () => (this.tasks = this.tasks.filter(t => t.id !==task.id))
      ); 
  }

  toggleReminder(task: Task) {
    task.reminder = !task.reminder;
    this.taskService.updateTaskReminder(task).subscribe();    
  }

  addTask(task: Task) {
    this.taskService.addTask(task).subscribe((task) => this.
    tasks.push(task));
  }
}
