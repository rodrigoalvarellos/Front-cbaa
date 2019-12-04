import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { IOrganizacion } from '../classes/organizacion.interface';
import { map } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class OrganizacionesService {

  CTRL_URL = environment.BASE_API_URL + '/organizaciones';

  constructor( public http: HttpClient ) { }

  getOrganizaciones(): Observable<IOrganizacion[]> {
      return this.http.get(this.CTRL_URL).pipe( map( (orgs: IOrganizacion[]) => orgs ));
  }
}
