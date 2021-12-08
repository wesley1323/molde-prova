import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { HomeComponent } from './home/home.component';
import { TaskComponent } from './task/task.component';
import { TasksService } from './tasks.service';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent },
      { path: 'task', component: TaskComponent },
    ]),
  ],
  declarations: [AppComponent, HelloComponent, HomeComponent, TaskComponent],
  bootstrap: [AppComponent],
  providers: [TasksService],
})
export class AppModule {}
