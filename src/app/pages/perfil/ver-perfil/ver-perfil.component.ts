import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../../services/login.service';
import { IUser } from '../../../classes/user.interface';
import { Observable } from 'rxjs';

@Component({
  selector: 'cba-ver-perfil',
  templateUrl: './ver-perfil.component.html',
  styleUrls: ['./ver-perfil.component.scss'],
})
export class VerPerfilComponent implements OnInit {

  user$: Observable<IUser>;

  constructor(public login$: LoginService) { }

  ngOnInit() {
    this.user$ = this.login$.getUser();
  }





}
