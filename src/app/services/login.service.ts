import { Injectable } from '@angular/core';
import { NbAuthService, NbAuthJWTToken } from '@nebular/auth';
import { HttpClient } from '@angular/common/http';
import { IUser } from '../classes/user.interface';
import { Observable } from 'rxjs';


@Injectable({ providedIn: 'root' })
export class LoginService {

  userId: string;
  user: IUser = {};
  logueado: boolean;

  constructor(public auth$: NbAuthService, private http$: HttpClient) {

    // this.logueado = false;

    console.log(this.user);
    this.escucharToken();

    // this.auth$.onTokenChange()
    //   .subscribe((token: NbAuthJWTToken) => {
    //     if (token.isValid()) {
    //       this.userId = token.getPayload().sub; // here we receive a payload from the token and assigns it to our `user` variable
    //       this.logueado = true;
    //       this.getUserById(this.userId).subscribe((beUser: IUser) => {
    //         this.user = beUser;
    //         console.log(this.user);
    //       });
    //     }
    //   });
  }

  escucharToken() {

    this.auth$.onTokenChange()
      .subscribe((token: NbAuthJWTToken) => {

        if (token.isValid()) {
          this.userId = token.getPayload().sub; // here we receive a payload from the token and assigns it to our `user` variable
          this.getUserById(this.userId).subscribe( beUser => {
            this.user = beUser;
            console.log(this.user);
          });
          // console.log(this.user);
        }

      });
  }

  // getUserFromToken() {
  //   this.auth$.getToken().subscribe(
  //     (token: NbAuthJWTToken) => {
  //        this.extraerUserToken(token);
  //     }
  //   );
  // }

  // extraerUserToken(token: NbAuthJWTToken) {
  //   if (token.isValid()) {
  //     this.userId = token.getPayload().sub;
  //   }
  // }

  getUserById(userId: string): Observable<IUser> {
    // ObjectId("5dc1846d7da5cf30542ea49a")
    const url = 'http://localhost:3000/users/' + userId;
    return this.http$.get(url);

  }

  logout() {
    this.auth$.logout('email')
    .subscribe(result => this.logueado = false);
  }
}
