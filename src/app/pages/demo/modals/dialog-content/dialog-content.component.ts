import { Component, OnInit, Input } from '@angular/core';
import { NbDialogRef } from '@nebular/theme';

@Component({
  selector: 'cba-dialog-content',
  templateUrl: './dialog-content.component.html',
  styleUrls: ['./dialog-content.component.scss'],
})
export class DialogContentComponent implements OnInit {

  @Input() title: string;
  response = 'Esta es una respuesta desde el modal';

  constructor( protected ref: NbDialogRef<DialogContentComponent>) { }

  ngOnInit() {
  }

  dismiss() {
    this.ref.close();
  }

  submit() {
    this.ref.close(this.response);
  }

}
