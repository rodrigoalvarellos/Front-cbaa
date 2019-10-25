import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { FormValidationService } from '../../../services/forms-validations.service';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'formularios',
  templateUrl: './formularios.component.html',
  styleUrls: ['./formularios.component.scss'],
})
export class FormulariosComponent implements OnInit {

  myForm: FormGroup;
  formErrors: any;


  checked = false;
  sexos = [
    { value: 'Masculino', label: 'Masculino' },
    { value: 'Femenino', label: 'Femenino' },
    { value: 'NS/NC', label: 'NS/NC' },
  ];

  constructor(
    private fb: FormBuilder,
    public form$: FormValidationService) { }

  ngOnInit() {
    this.crearForm();
  }

  private crearForm() {

    this.myForm = this.fb.group({
      nombre:    new FormControl('Rodrigo Alvarellos', [Validators.required]),
      profesion: new FormControl('3'),
      email:     new FormControl('rodri.alvarellos@gmail.com', [Validators.required, Validators.email]),
      website:   new FormControl('www.angular.io'),
      fechaNac:  new FormControl(Date.now()),
      sarampion: new FormControl(true),
      sexo:      new FormControl(this.sexos[0].value),
      descripcion: new FormControl(''),
      address: new FormGroup({
        street: new FormControl('Street'),
        city: new FormControl('City'),
        state: new FormControl('State'),
        zip: new FormControl('Zip'),
      }),
    });

    this.formErrors = {
      nombre : '',
      profesion : '',
      email : '',
      website : '',
      fechaNac : '',
      sarampion : '',
      sexo : '',
      descripcion : '',
      street : '',
      city : '',
      state : '',
      zip : '',
    };

    this.myForm.valueChanges.subscribe((data) => {
      this.formErrors = this.form$.validateForm(this.myForm, this.formErrors, true);
    });

  }

  toggleCheck(checked: boolean) {
   // tslint:disable-next-line: no-console
   console.log('esto esta chekeado?');
  }

  guardarForm() {
    // tslint:disable-next-line: no-console
    // console.log(this.myForm);
    // tslint:disable-next-line: no-console
    // console.log(this.setFormValue('descripcion', 'esto es un exito'));
    // const valor = 'nombre';
    // alert(`Enviado...El valor de ${valor} es ${this.getFormValue(valor)}`);
    this.form$.markFormGroupTouched(this.myForm);
    if ( this.myForm.valid) {

    } else {
      this.formErrors = this.form$.validateForm(this.myForm, this.formErrors, false);
    }
  }

  getFormValue(valor: string) {
    return this.myForm.get(valor).value;
  }

  getCtrl(valor: string) {
    return this.myForm.get(valor);
  }

  setFormValue( valor: string, contenido: any ) {
    this.myForm.get(valor).setValue(contenido);
    return this.getFormValue(valor);
  }

  resetearForm() {
    this.myForm.reset({
      nombre: '',
      profesion: '1',
      email: '',
      website: '',
      fechaNac: Date.now(),
      sarampion: '',
      sexo: '',
      descripcion: '',
    });
  }

  esRequerido(valor: string) {
    // console.log(this.myForm);

    if ( this.getCtrl(valor).errors != null
         && this.getCtrl(valor).errors.hasOwnProperty('required')  ) {
      return true;
    } else {
      return false;
    }


  }

}
