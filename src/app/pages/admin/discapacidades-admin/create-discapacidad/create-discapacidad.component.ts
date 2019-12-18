import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { FormValidationService } from '../../../../services/forms-validations.service';
import { CategoriasService } from '../../../../services/categorias.service';
import { ToastrService } from '../../../../services/toastr.service';
import { ICategoria } from '../../../../classes/categoria.interface';
import { DiscapacidadesService } from '../../../../services/discapacidades.service';
import { IDiscapacidad } from '../../../../classes/discapacidad.interface';


@Component({
  selector: 'cba-create-discapacidad',
  templateUrl: './create-discapacidad.component.html',
  styles: [],
})
export class CreateDiscapacidadComponent implements OnInit {

  discForm: FormGroup;
  formErrors: any;

  constructor(
    private toastS: ToastrService,
    private discS: DiscapacidadesService,
    private fb: FormBuilder,
    public formV: FormValidationService ) { }

  ngOnInit() {
    this.crearForm();
  }

  private crearForm() {

    this.discForm = this.fb.group({
      nombre: new FormControl('', [Validators.required]),
      icono: new FormControl('', [Validators.required]),
      descripcion: new FormControl(''),
    });

    this.formErrors = {
      nombre: '',
      icono: '',
    };

    this.discForm.valueChanges.subscribe((data) => {
      this.formErrors = this.formV.validateForm(this.discForm, this.formErrors, true);
    });

  }

  submitForm() {

    const newDiscapacidad: IDiscapacidad = {
      nombre: this.discForm.get('nombre').value,
      icono: this.discForm.get('icono').value,
      descripcion: this.discForm.get('descripcion').value,
      isActive: true,
    };

    this.discS.createDiscapacidad(newDiscapacidad).subscribe(
      (resp: any) => {
        this.toastS.showToast('success', 'Listo!', 'Discapacidad creada con exito');
        this.discForm.reset();
      },
      (err: any) => this.toastS.showToast('danger', 'Error', 'Hubo un problema para crear la discapacidad'),
    );

  }

}
