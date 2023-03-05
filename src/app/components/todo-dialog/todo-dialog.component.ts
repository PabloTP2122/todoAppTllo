import { Component, Inject } from '@angular/core';
import { faClock, faCheckSquare, faUser } from '@fortawesome/free-regular-svg-icons';
import { faTag, faBars, faCheckToSlot, faClose } from '@fortawesome/free-solid-svg-icons';
import { DialogRef, DIALOG_DATA } from '@angular/cdk/dialog';
import { ToDo } from '../../models/todo.model';

interface Data {
  todo: ToDo;
}

@Component({
  selector: 'app-todo-dialog',
  templateUrl: './todo-dialog.component.html'
})

export class TodoDialogComponent {


  faClock = faClock;
  faCheckSquare = faCheckSquare;
  faUser = faUser;
  faTag = faTag;
  faCheckToSlot = faCheckToSlot;
  faBars = faBars;
  faClose = faClose;

  todo!: ToDo;

  constructor(private dialogRef: DialogRef<Data>,
    @Inject(DIALOG_DATA) data: Data,

  ) {
    this.todo = data.todo;
  }

  close() {
    this.dialogRef.close();
  }

}
