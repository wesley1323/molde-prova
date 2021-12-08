import { Injectable } from '@angular/core';

interface Task {
  nome: string;
}

@Injectable()
export class TasksService {
  listaTask: Array<Task> = [];

  constructor() {
    if (localStorage.getItem('tasks')) {
      this.listaTask = JSON.parse(localStorage.getItem('tasks'));
    } else {
      localStorage.setItem('tasks', JSON.stringify([]));
    }
  }

  addTask(task: string) {
    if (task != '') {
      this.listaTask.push({
        nome: task,
      });
      localStorage.setItem('tasks', JSON.stringify(this.listaTask));
    }
  }

  getTasks() {
    if (this.listaTask != null) {
      this.listaTask = JSON.parse(localStorage.getItem('tasks'));
    }
    return this.listaTask;
  }

  delTask(index: number) {
    if (this.listaTask != null) {
      this.listaTask.splice(index, 1);
      localStorage.setItem('tasks', JSON.stringify(this.listaTask));
    }
  }
}
