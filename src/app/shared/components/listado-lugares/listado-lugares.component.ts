import { Component, OnInit, Input } from '@angular/core';
import { Marcador } from '../../../classes/marcador.class';

@Component({
  selector: 'cba-listado-lugares',
  templateUrl: './listado-lugares.component.html',
  styleUrls: ['./listado-lugares.component.scss']
})
export class ListadoLugaresComponent implements OnInit {

  @Input() items: Marcador[] = [];

  constructor() { }

  ngOnInit() {
  }

}
