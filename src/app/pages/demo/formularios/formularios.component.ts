import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'formularios',
  templateUrl: './formularios.component.html',
  styleUrls: ['./formularios.component.scss'],
})
export class FormulariosComponent implements OnInit {

  myForm: FormGroup;


  checked = false;
  sexos = [
    { value: 'Masculino', label: 'Masculino' },
    { value: 'Femenino', label: 'Femenino' },
    { value: 'NS/NC', label: 'NS/NC' },
  ];

  constructor( private fb: FormBuilder ) { }

  ngOnInit() {
    this.crearForm();
  }

  private crearForm() {

    this.myForm = this.fb.group({
      nombre:    new FormControl('Rodrigo Alvarellos', [ Validators.required]),
      profesion: new FormControl('3'),
      email:     new FormControl('rodri.alvarellos@gmail.com'),
      website:   new FormControl('www.angular.io'),
      fechaNac:  new FormControl(Date.now()),
      sarampion: new FormControl(true),
      sexo:      new FormControl(this.sexos[0].value),
      descripcion: new FormControl(''),
    });

  }

  toggleCheck(checked: boolean) {
   // tslint:disable-next-line: no-console
   console.log('esto esta chekeado?');
  }

  guardarForm() {
    // tslint:disable-next-line: no-console
    console.log(this.myForm);
    // tslint:disable-next-line: no-console
    console.log(this.setFormValue('descripcion', 'esto es un exito'));
    const valor = 'nombre';
    alert(`Enviado...El valor de ${valor} es ${this.getFormValue(valor)}`);
  }

  getFormValue(valor: string) {
    return this.myForm.get(valor).value;
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

}
