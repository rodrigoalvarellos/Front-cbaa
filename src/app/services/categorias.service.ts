import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { map } from 'rxjs/operators';

@Injectable({providedIn: 'root'})
export class CategoriasService {

  CTRL_URL = environment.BASE_API_URL + '/categorias';

  constructor( public http: HttpClient) { }

  getCategorias() {

    const lsCateg =localStorage.getItem('categorias');

    if(  lsCateg !== null) {
      console.log(lsCateg);
    } else {

      return this.http.get(this.CTRL_URL).pipe(
        map( (categ) => {
          localStorage.setItem('categorias', JSON.stringify(categ));
          return categ;
        })
      );
    }

  }

}
