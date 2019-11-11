import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Marcador } from '../classes/marcador.class';
import { map } from 'rxjs/operators';
import { ToastrService } from './toastr.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LugaresService {

  marcadores: Marcador[] = [];
  

  constructor(
    private http$: HttpClient,
    private toastr$: ToastrService ) {}

  getMarcadores(): Observable<Marcador[]> {

    const url = 'http://www.json-generator.com/api/json/get/cpnZqMuHvS?indent=2';
    return this.http$.get(url).pipe(map(

      (data: any) => {
        this.marcadores = data.map(it => {

          return new Marcador(it.lat, it.lng, it.color, it.img, it.titulo, it.descripcion);
          // return {
          //   lat: it.lat,
          //   lng: it.lng,
          //   color: it.color,
          //   img: it.img,
          //   titulo: it.titulo,
          //   descripcion: it.descripcion,
          // };
        });

        return this.marcadores;
      },
      (err) => this.toastr$.showToast('danger', 'Error al obtener Lugares', err.message),

    ));
  }

  // conectarServer() {

  //   const url = 'http://localhost:3000/users';
  //   return this.http$.get(url).pipe(map(
  //     (data: any) => data,
  //   ));

  // }


}
