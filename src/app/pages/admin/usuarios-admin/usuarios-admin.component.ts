import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { UsersService } from '../../../services/users.service';
import { IUser } from '../../../classes/user.interface';

@Component({
  selector: 'cba-usuarios-admin',
  templateUrl: './usuarios-admin.component.html',
  styleUrls: ['./usuarios-admin.component.scss'],
})
export class UsuariosAdminComponent implements OnInit {

  users$: Observable<IUser[]>;

  constructor( private userS: UsersService) { }

  ngOnInit() {
    this.users$ = this.userS.getUsers();
  }




}
