import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { map } from 'rxjs/operators';
import { of, Observable } from 'rxjs';
import { ICategoria } from '../classes/categoria.interface';

@Injectable({providedIn: 'root'})
export class CategoriasService {

  CTRL_URL = environment.BASE_API_URL + '/categorias';

  constructor( public http: HttpClient) { }

  getCategorias(): Observable<ICategoria[]> {

    const lsCateg: ICategoria[] = JSON.parse(localStorage.getItem('categorias'));

    if (  lsCateg !== null && lsCateg.length > 0) {
      return of(lsCateg);
    } else {
        return this.http.get(this.CTRL_URL).pipe( map( ( categ: ICategoria[] ) => {
          localStorage.setItem('categorias', JSON.stringify(categ));
          return categ;
        }));
    }
  }

  createCategoria( categoria: ICategoria ) {
    return this.http.post( this.CTRL_URL, categoria );
  }

}
