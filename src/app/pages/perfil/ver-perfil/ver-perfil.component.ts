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
  async ngOnInit() {

    this.user = await this.login$.getUser();
    // this.login$.getUser().then(user => this.user = user).catch(err => this.user);

  }





}
