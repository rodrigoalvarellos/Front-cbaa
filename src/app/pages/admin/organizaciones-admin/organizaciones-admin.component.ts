import { Component, OnInit } from '@angular/core';
import { IOrganizacion } from '../../../classes/organizacion.interface';
import { Observable } from 'rxjs';
import { OrganizacionesService } from '../../../services/organizaciones.service';

@Component({
  selector: 'cba-organizaciones-admin',
  templateUrl: './organizaciones-admin.component.html',
  styleUrls: ['./organizaciones-admin.component.scss'],
})
export class OrganizacionesAdminComponent implements OnInit {

  organizaciones$: Observable<IOrganizacion[]>;

  constructor( public orgSvc: OrganizacionesService ) { }

  ngOnInit() {
    this.organizaciones$ = this.orgSvc.getOrganizaciones();
  }

}
