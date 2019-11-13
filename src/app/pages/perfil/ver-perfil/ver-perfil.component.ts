import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../../services/login.service';
import { IUser } from '../../../classes/user.interface';
import { NbAuthService, NbAuthJWTToken } from '@nebular/auth';

@Component({
  selector: 'cba-ver-perfil',
  templateUrl: './ver-perfil.component.html',
  styleUrls: ['./ver-perfil.component.scss'],
})
export class VerPerfilComponent implements OnInit {

  user: IUser;

  constructor(public login$: LoginService) { }
  ngOnInit() {
    this.user = this.login$.getUser();
  }

  // getUser() {

  //   this.auth$.getToken().subscribe((token: NbAuthJWTToken) => {

  //     if (token.isValid) {
  //       this.user = JSON.parse(token.getPayload().data);
  //     }
  //   });
  // }




}
