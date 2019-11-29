import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IUser } from '../classes/user.interface';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class PerfilUsuarioService {

  CTRL_URL = environment.BASE_API_URL + '/users';

  constructor( private http: HttpClient ) { }

  updateUser(user: IUser) {

    const { _id, ...values } = user;

    const url = this.CTRL_URL + `/${_id}`; // TODO- agragar id;
    return this.http.put(url, values );
  }
}
