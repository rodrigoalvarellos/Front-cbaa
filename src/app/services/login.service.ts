import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NbAuthService, NbAuthJWTToken } from '@nebular/auth';
import { IUser } from '../classes/user.interface';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';


@Injectable({ providedIn: 'root' })
export class LoginService {

  constructor(public auth$: NbAuthService, private http$: HttpClient) { }

  escucharToken() {

    return this.auth$.onTokenChange()
      .pipe( map( (token: NbAuthJWTToken) => {
          if (token.isValid && token.getPayload() !== null) {
            const user = JSON.parse(token.getPayload().data);
            localStorage.setItem('user', user);
          }

        },
      ));
  }


  getUser(): Observable<IUser> {

    let user = JSON.parse(localStorage.getItem('user'));

    if (user) {
      return of(user);
    } else {
      return this.auth$.getToken().pipe(
        map((token: NbAuthJWTToken) => {
          user = JSON.parse(token.getPayload().data);
          localStorage.setItem('user', token.getPayload().data);
          return user;
        }, (error: any) => null),
      );
    }
  }

  setUser(user: IUser) {
    localStorage.setItem('user', JSON.stringify(user));
  }


  logout() {
    return this.auth$.logout('email')
      .pipe(map( result => localStorage.removeItem('user') ));
  }
}
