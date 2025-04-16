import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter, Routes } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';
import { TasksComponent } from './componets/tasks/tasks.component';
import { AboutComponent } from './componets/about/about.component';




export const routes: Routes = [
  { path: '', component: TasksComponent },
  { path: 'about', component: AboutComponent }
];


export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }), 
    provideRouter(routes), 
    provideHttpClient()],
};
