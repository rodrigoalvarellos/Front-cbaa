import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { of, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from '../../environments/environment';
import { IDiscapacidad } from '../classes/discapacidad.interface';



@Injectable({ providedIn: 'root' })
export class DiscapacidadesService {

  CTRL_URL = environment.BASE_API_URL + '/discapacidades';

  constructor( public http: HttpClient ) { }

  getDiscapacidades(): Observable<IDiscapacidad[]> {

    const lsDiscs: IDiscapacidad[] = JSON.parse(localStorage.getItem('discapacidades'));

    if (  lsDiscs !== null) {

      return of(lsDiscs);

    } else {

      return this.http.get(this.CTRL_URL).pipe( map( ( discs: IDiscapacidad[] ) => {
        localStorage.setItem('discapacidades', JSON.stringify(discs));
        return discs;
      }));

    }
  }

}
