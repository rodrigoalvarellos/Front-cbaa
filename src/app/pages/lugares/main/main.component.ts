import { Component, OnInit } from '@angular/core';
import { LugaresService } from '../../../services/lugares.service';
import { Marcador } from '../../../classes/marcador.class';

@Component({
  selector: 'cba-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit {


  marcadores: Marcador[] = [];

  constructor( private lugares$: LugaresService ) { }

  ngOnInit() {
    this.lugares$.getMarcadores().subscribe( data => {
      this.marcadores = data;
    });
  }
}
