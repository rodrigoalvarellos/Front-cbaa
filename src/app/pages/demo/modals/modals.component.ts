import { Component, OnInit, TemplateRef } from '@angular/core';
import { NbDialogService } from '@nebular/theme';
import { DialogContentComponent } from './dialog-content/dialog-content.component';

@Component({
  selector: 'cba-modals',
  templateUrl: './modals.component.html',
  styleUrls: ['./modals.component.scss'],
})
export class ModalsComponent implements OnInit {

  constructor( private dialog$: NbDialogService ) { }

  ngOnInit() {}

  openComponent() {
    this.dialog$.open( DialogContentComponent, {
      context: {
        title: 'Este es un Titulo pasado por parametros',
      },
      hasBackdrop: true,
      closeOnBackdropClick: false,
      closeOnEsc: true,
    }).onClose.subscribe( data => {
      if (data) {
        alert(data);
      }
    });
  }

  openTemplate(dialog: TemplateRef<any>) {
    this.dialog$.open(dialog, { context: 'this is some additional data passed to dialog' });
  }

}
