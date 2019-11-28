import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { FormValidationService } from '../../../services/forms-validations.service';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { LoginService } from '../../../services/login.service';
import { IUser } from '../../../classes/user.interface';

@Component({
  selector: 'cba-editar-perfil',
  templateUrl: './editar-perfil.component.html',
  styleUrls: ['./editar-perfil.component.scss'],
})
export class EditarPerfilComponent implements OnInit, OnDestroy {

  private unsubscribe$ = new Subject<void>();
  user: IUser;
  userForm: FormGroup;

  // Flags
  cambiarFoto: boolean = false;

  constructor(
    public login$: LoginService,
    private fb: FormBuilder,
    public form$: FormValidationService,
   ) {


  }

  ngOnInit() {

    this.login$.getUser().subscribe( ( user: IUser) => {
      this.user = user;
      this.crearUserForm(user);
    } );
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

  // Form Methods
  crearUserForm(user: IUser) {

    this.userForm = this.fb.group({
      nombre: new FormControl( user.nombre, [Validators.required]),
      apellido: new FormControl( user.apellido, [Validators.required]),
      descripcion: new FormControl( user.descripcion),
      foto: new FormControl('url'),
    });

  }

  submitUserForm() {
    // TODO - Implementar
    console.log('Submiteado!');
  }

}
