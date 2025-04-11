import { Component } from '@angular/core';
import { Task } from '../../Task';
import { CommonModule } from '@angular/common';
import { TaskItemComponent } from '../task-item/task-item.component';
import { TaskService } from '../../services/task.service'; 

@Component({
  selector: 'app-tasks',
  imports: [CommonModule, TaskItemComponent],
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
}
