import { Component } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
import { HeaderComponent } from './componets/header/header.component';
import { TasksComponent } from './componets/tasks/tasks.component';
import { FooterComponent } from './componets/footer/footer.component';



@Component({
  selector: 'app-root',
  imports: [HeaderComponent, TasksComponent,RouterOutlet, RouterLink, RouterLinkActive, FooterComponent ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {}
 