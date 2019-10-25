import { Component, OnInit } from '@angular/core';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'formularios',
  templateUrl: './formularios.component.html',
  styleUrls: ['./formularios.component.scss'],
})
export class FormulariosComponent implements OnInit {

  checked = false;
  sexos = [
    { value: 'Masculino', label: 'Masculino' },
    { value: 'Femenino', label: 'Femenino' },
    { value: 'NS/NC', label: 'NS/NC' },
  ];
  sexoSel: any;

  constructor() { }

  ngOnInit() {
    this.sexoSel = this.sexos[0].value;
  }

  toggleCheck(checked: boolean) {
    this.checked = checked;
  }

}
