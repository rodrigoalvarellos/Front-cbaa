import { Component, OnInit } from '@angular/core';
import { IDiscapacidad } from '../../../classes/discapacidad.interface';
import { Observable } from 'rxjs';
import { DiscapacidadesService } from '../../../services/discapacidades.service';

@Component({
  selector: 'cba-discapacidades-admin',
  templateUrl: './discapacidades-admin.component.html',
  styleUrls: ['./discapacidades-admin.component.scss'],
})
export class DiscapacidadesAdminComponent implements OnInit {

  discapacidades$: Observable<IDiscapacidad[]>;
  selected: IDiscapacidad;

  constructor( public discSvc: DiscapacidadesService ) { }

  ngOnInit() {
    this.discapacidades$ = this.discSvc.getDiscapacidades();
  }

}
