import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { IUser } from '../../../classes/user.interface';
import { LoginService } from '../../../services/login.service';
import { FireUploadService } from '../../../services/fire-upload.service';
import { PerfilUsuarioService } from '../../../services/perfil-usuario.service';
import { FormValidationService } from '../../../services/forms-validations.service';
import { ToastrService } from '../../../services/toastr.service';

@Component({
  selector: 'cba-editar-perfil',
  templateUrl: './editar-perfil.component.html',
  styleUrls: ['./editar-perfil.component.scss'],
})
export class EditarPerfilComponent implements OnInit, OnDestroy {

  private unsubscribe$ = new Subject<void>();

  user: IUser;
  userForm: FormGroup;
  userFormErrors: any;
  guardando = false;

  // Fotos
  retratoImg: any; // Es la imagen que se va a mostrar siempre
  fotoVaciaUrl = 'assets/images/no-image.jpg';
  previewUrl: any;
  cambiarFoto: boolean = false;
  fotoSubida: string;
  file: File;


  constructor(
    public login$: LoginService,
    public form$: FormValidationService,
    public fireUp$: FireUploadService,
    private perfil$: PerfilUsuarioService,
    private router: Router,
    private fb: FormBuilder,
    private toastr$: ToastrService ) { }

  ngOnInit() {

    this.retratoImg = this.fotoVaciaUrl;

    this.login$.getUser().subscribe((user: IUser) => {

      this.user = user;
      if (user.foto) this.retratoImg = user.foto;
      this.crearUserForm(user);

    });

  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

  // Foto perfil Methods

  catchFotoSubida(foto: File) {
    this.file = foto;
  }

  catchPreviewUrl(url: any) {
    this.previewUrl = url;
    this.retratoImg = this.previewUrl;
    this.cambiarFoto = false;
  }

  // Form Methods
  crearUserForm(user: IUser) {

    this.userForm = this.fb.group({
      nombre: new FormControl(user.nombre, [Validators.required]),
      apellido: new FormControl(user.apellido, [Validators.required]),
      descripcion: new FormControl(user.descripcion),
      foto: new FormControl('url'),
    });

    this.userFormErrors = {
      nombre : '',
      apellido : '',
      descripcion : '',
      foto : '',
    };

    this.userForm.valueChanges.pipe(takeUntil(this.unsubscribe$)).subscribe((data) => {
      this.userFormErrors = this.form$.validateForm(this.userForm, this.userFormErrors, true);
    });

  }

  submitUserForm() {

    // TODO - Implementar
    if (this.userForm.invalid) {
      this.toastr$.showToast('danger', 'Cuidado', 'Faltan datos importantes.');
      return;
    }

    this.guardando = true;

    // Validar si hay foto que subir
    if (this.file) {
      // Subir aca la imagen
      this.fireUp$.uploadURL.pipe(takeUntil(this.unsubscribe$)).subscribe(url => {
        this.fotoSubida = url;
        this.guardarUser();
      });
      this.fireUp$.startUpload('perfil', this.file);

    }
  }

  getValue(value: string) {
    return this.userForm.get(value).value;
  }

  guardarUser() {

    const newUser = { ...this.user };

    if (this.user.nombre !== this.getValue('nombre')) {
      newUser.nombre = this.getValue('nombre');
    }

    if (this.user.apellido !== this.getValue('apellido')) {
      newUser.apellido = this.getValue('apellido');
    }

    if (this.user.descripcion !== this.getValue('descripcion')) {
      newUser.descripcion = this.getValue('descripcion');
    }

    if (this.fotoSubida && (this.user.foto !== this.fotoSubida)) {
      newUser.foto = this.fotoSubida;
    }

    this.perfil$.updateUser(newUser).subscribe(
      (userActualizado) => {
        this.login$.setUser(userActualizado);
        this.toastr$.showToast('success', 'Actualizado!', 'Tus datos se actualizaron con exito 😊');
        if ( this.user.foto !== null && newUser.foto) {
          this.fireUp$.deleteFile(this.user.foto)
          .then(resp => console.log('Foto Anterior borrada con exito'))
          .catch( err => console.log('Ocurrio un error al eliminar la foto vieja'));
        }

      },
      (err) => this.toastr$.showToast('danger', 'Ooops! 😱', 'Ocurrió un error al guardar tus datos, intantalo nuevamente'),
      () => {
        this.guardando = false; // Quitar Spinner
        this.router.navigate(['pages/perfil/ver-perfil']); // TODO Redirigir a Ver Perfil y actualizar los datos
      },
    );

  }

}
