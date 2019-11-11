import { Injectable } from '@angular/core';
import { NbAuthService, NbAuthJWTToken } from '@nebular/auth';
import { HttpClient } from '@angular/common/http';
import { IUser } from '../classes/user.interface';
import { Observable, of } from 'rxjs';


@Injectable({ providedIn: 'root' })
export class LoginService {

  logueado = false;
  userId: string;
  user: IUser = {};

  constructor(private auth$: NbAuthService, private http$: HttpClient) {

  this.auth$.onTokenChange()
      .subscribe((token: NbAuthJWTToken) => {

        if (token.isValid()) {
          this.userId = token.getPayload().sub; // here we receive a payload from the token and assigns it to our `user` variable
          this.logueado = true ;
          this.getUserById(this.userId).subscribe( (beUser: IUser) => {
            this.user = beUser;
            console.log(this.user);
          } );
          // console.log(this.userId);
          // this.auth$.getToken().subscribe( rtaToken => console.log(rtaToken));
        }
      });
  }

  probarToken() {

    this.auth$.onTokenChange()
      .subscribe((token: NbAuthJWTToken) => {

        if (token.isValid()) {
          this.userId = token.getPayload(); // here we receive a payload from the token and assigns it to our `user` variable
        }

      });
  }

  getLogin() {
    return this.logueado;
  }

  getUserById( userId: string): Observable<IUser> {
    // ObjectId("5dc1846d7da5cf30542ea49a")
    const url = 'http://localhost:3000/users/' + userId;
    return this.http$.get(url);

  }

  logout() {
    // TODO
    this.auth$.logout('email').subscribe( result => {
        console.log(result);
        this.logueado = false;
      },
    );
  }
}
