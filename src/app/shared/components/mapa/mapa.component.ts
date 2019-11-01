import { Component, OnInit, Input } from '@angular/core';
import { Marcador } from '../../../classes/marcador.class';
import { InfoWindow } from '@agm/core/services/google-maps-types';

@Component({
  selector: 'cba-mapa',
  templateUrl: './mapa.component.html',
  styleUrls: ['./mapa.component.scss'],
})
export class MapaComponent implements OnInit {

  @Input() marcadores: Marcador[] = [];
  @Input() lat = -31.4074091;
  @Input() lng = -64.1913104;
  @Input() zoom = 13;
  previous: InfoWindow;

  constructor() { }

  ngOnInit() {}

  agregarMarcador(evento: any) {
    const coords: { lat: number, lng: number } = evento.coords;
    const nuevoMarcador = new Marcador(coords.lat, coords.lng, 'orange');
    this.marcadores.push(nuevoMarcador);
    // this.guardarStorage();
    // this.toastr$.showToast('success', 'Excelente!', 'Marcador agregado con exito');
  }

  clickedMarker(infowindow: InfoWindow) {
    if (this.previous) {
      this.previous.close();
    }
    this.previous = infowindow;
  }

  closeMarker(infowindow: InfoWindow) {
    infowindow.close();
    this.previous = null;
  }

}
