import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { FormValidationService } from '../../../../services/forms-validations.service';
import { CategoriasService } from '../../../../services/categorias.service';
import { ToastrService } from '../../../../services/toastr.service';
import { ICategoria } from '../../../../classes/categoria.interface';

@Component({
  selector: 'cba-create-categoria',
  templateUrl: './create-categoria.component.html',
  styleUrls: ['./create-categoria.component.scss']
})
export class CreateCategoriaComponent implements OnInit {

  categForm: FormGroup;
  formErrors: any;

  constructor(
    private toastS: ToastrService,
    private catS: CategoriasService,
    private fb: FormBuilder,
    public formV: FormValidationService ) { }

  ngOnInit() {
    this.crearForm();
  }

  private crearForm() {

    this.categForm = this.fb.group({
      nombre: new FormControl('', [Validators.required]),
      icono: new FormControl('', [Validators.required]),
      descripcion: new FormControl( '' )
    });

    this.formErrors = {
      nombre: '',
      icono: '',
    };

    this.categForm.valueChanges.subscribe((data) => {
      this.formErrors = this.formV.validateForm(this.categForm, this.formErrors, true);
    });

  }

  submitForm() {

    const newCategoria: ICategoria = {
      nombre: this.categForm.get('nombre').value,
      icono: this.categForm.get('icono').value,
      descripcion: this.categForm.get('descripcion').value,
      isActive: true,
    };

    this.catS.createCategoria(newCategoria).subscribe(
      (resp: any) => {
        this.toastS.showToast('success', 'Listo!', 'Categoria creada con exito');
        this.categForm.reset();
      },
      (err: any) => this.toastS.showToast('danger', 'Error', 'Hubo un problema para crear la categoria'),
    );

  }

}
