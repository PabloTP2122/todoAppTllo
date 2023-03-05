import { Component } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { ToDo, Column } from '../../models/todo.model';
import { faEllipsisH, faPlus } from '@fortawesome/free-solid-svg-icons';
import { FormControl } from '@angular/forms';
import { Dialog } from '@angular/cdk/dialog';

// Components
import { TodoDialogComponent } from '../../components/todo-dialog/todo-dialog.component';



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
  .example-box:last-child {
    border: none;
  }
  .example-list.cdk-drop-list-dragging .example-box:not(.cdk-drag-placeholder) {
    transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);
  }
  .cdk-drag-disabled,
  .cdk-drag-preview {
    box-sizing: border-box;
    border-radius: 4px;
    box-shadow: 0 5px 5px -3px rgba(0, 0, 0, 0.2),
                0 8px 10px 1px rgba(0, 0, 0, 0.14),
                0 3px 14px 2px rgba(0, 0, 0, 0.12);
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
  // Index de la columna
  ni = undefined;

  list = new FormControl('');

  columns: Column[] = [
    {
      title: 'Por hacer',
      todos: [
        {
          id: '1',
          title: 'Terminar curso de maquetado con tailwind'
        },
        {
          id: '2',
          title: 'Hacer curso de routing'
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


  constructor(
    private dialog: Dialog
  ) { }

  dropColumn(event: CdkDragDrop<any[]>) {
    console.log(event);
    if (event.previousContainer === event.container) {
      moveItemInArray(this.columns, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      )
    }
  }
  drop(event: CdkDragDrop<any[]>) {
    console.log(event);

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

  getIndex(i: any) {
    return this.ni = i;
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
  openDialog(todo: ToDo) {
    const dialogRef = this.dialog.open(TodoDialogComponent, {
      minWidth: '300px',
      maxWidth: '50%',
      minHeight: '600px',
      data: {
        todo: todo,
      }
    })
    dialogRef.closed.subscribe(
      output => {
        console.log(output);
      }
    );


  }
}
