import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { IUser } from '../classes/user.interface';
import { map } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class UsersService {

  CTRL_URL = environment.BASE_API_URL + '/users';

  constructor( private http: HttpClient) { }

  getUsers(): Observable<IUser[]> {
    return this.http.get(this.CTRL_URL).pipe( map( (users: IUser[]) => users ));
  }
}
