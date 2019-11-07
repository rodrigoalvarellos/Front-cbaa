import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Marcador } from '../classes/marcador.class';
import { map } from 'rxjs/operators';
import { ToastrService } from './toastr.service';
import { Observable } from 'rxjs';
import { NbAuthJWTToken, NbAuthService } from '@nebular/auth';

@Injectable({
  providedIn: 'root',
})
export class LugaresService {

  marcadores: Marcador[] = [];
  user = {};

  constructor(
    private http$: HttpClient,
    private toastr$: ToastrService,
    private authService: NbAuthService) {

    this.authService.onTokenChange()
      .subscribe((token: NbAuthJWTToken) => {

        if (token.isValid()) {
          this.user = token.getPayload(); // here we receive a payload from the token and assigns it to our `user` variable
          console.log(this.user);
          this.authService.getToken().subscribe(token => console.log(token));

        }

      });
  }

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

  conectarServer() {

    const url = 'http://localhost:3000/users';
    return this.http$.get(url).pipe(map(
      (data: any) => data,
    ));

  }

  probarToken() {

    this.authService.onTokenChange()
      .subscribe((token: NbAuthJWTToken) => {

        if (token.isValid()) {
          this.user = token.getPayload(); // here we receive a payload from the token and assigns it to our `user` variable 
        }

      });

  }
}
