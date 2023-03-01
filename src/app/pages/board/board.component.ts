import { Component } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { ToDo, Column } from '../../models/todo.model';
import { faEllipsisH, faPlus } from '@fortawesome/free-solid-svg-icons';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',

  styles: [
    `
  .cdk-drop-list-dragging .cdk-drag {
    transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);
  }
  .cdk-drag-animating {
    transition: transform 300ms cubic-bezier(0, 0, 0.2, 1);
  }

    `
  ]
})
export class BoardComponent {
  //icons
  faEllipsisH = faEllipsisH;
  faPlus = faPlus;
  // vars
  isOpen = false;
  addNewTask = false;
  triggerOrigin: any;
  //
  indexList: any;

  list = new FormControl('');

  columns: Column[] = [
    {
      title: 'Por hacer',
      todos: [
        {
          id: '1',
          title: 'Hacer curso de maquetado'
        },
        {
          id: '2',
          title: 'Tarea 2'
        },
        {
          id: '3',
          title: 'Tarea 3'
        }
      ]
    },
    {
      title: 'Haciendo',
      todos: [
        {
          id: '1',
          title: 'Tarea 1'
        },
        {
          id: '2',
          title: 'Tarea 2'
        },
        {
          id: '3',
          title: 'Tarea 3'
        }
      ]
    },
    {
      title: 'Realizadas',
      todos: [
        {
          id: '1',
          title: 'Tarea 1'
        },
        {
          id: '2',
          title: 'Tarea 2'
        },
        {
          id: '3',
          title: 'Tarea 3'
        }
      ]
    }
  ]


  constructor() { }

  drop(event: CdkDragDrop<any[]>) {
    console.log(event);
    this.indexList = event.currentIndex;
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      )
    }
  }

  addColumn() {
    this.columns.push({
      title: 'Nueva columna',
      todos: [

      ]
    })
  }
  // For each colum overlay menu
  toggle(trigger: any) {
    this.triggerOrigin = trigger;
    this.isOpen = !this.isOpen
  }
  // Add new task
  addTask(todo: any) {
    todo.push({
      id: '5',
      title: this.list.value,
    })
    this.addNewTask = !this.addNewTask;
  }
  onSubmit() {
    if (this.list.value) {
      console.log("Form Submitted!");
      this.list.reset();
    }
  }
}
