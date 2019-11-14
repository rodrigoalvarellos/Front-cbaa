import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { FormValidationService } from '../../../services/forms-validations.service';

@Component({
  selector: 'cba-editar-perfil',
  templateUrl: './editar-perfil.component.html',
  styleUrls: ['./editar-perfil.component.scss']
})
export class EditarPerfilComponent implements OnInit {

  userForm: FormGroup;

  constructor(private fb: FormBuilder, public form$: FormValidationService) { }

  ngOnInit() {
    this.crearUserForm();
  }

  crearUserForm() {

    this.userForm =  this.fb.group({
      nombre:    new FormControl('Rodrigo', [Validators.required]),
      apellido: new FormControl('Alvarellos', [Validators.required]),
      descripcion: new FormControl('Una descripcion'),
      foto: new FormControl('url'),
    });

  }

  submitUserForm() {

    // TODO - Implementar

  }

  

}
