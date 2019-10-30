import { Component, OnInit, Input } from '@angular/core';
import { Marcador } from './marcador.class';
import { ToastrService } from '../../../services/toastr.service';
import { InfoWindow } from '@agm/core/services/google-maps-types';
import { NbSidebarService } from '@nebular/theme';

@Component({
  selector: 'cba-maps',
  templateUrl: './maps.component.html',
  styleUrls: ['./maps.component.scss'],
})
export class MapsComponent implements OnInit {


  marcadores: Marcador[] = [];
  lat = -31.4074091;
  lng = -64.1913104;
  previous: InfoWindow;

  @Input() zoom = 13;


  constructor(
    private toastr$: ToastrService,
    private sidebar$: NbSidebarService ) {

    if (localStorage.getItem('marcadores')) {
      this.marcadores = JSON.parse(localStorage.getItem('marcadores'));
    }

  }

  ngOnInit() {
    this.sidebar$.toggle(true, 'menu-sidebar');
  }

  agregarMarcador(evento: any) {
    const coords: { lat: number, lng: number } = evento.coords;
    const nuevoMarcador = new Marcador(coords.lat, coords.lng, 'orange');
    this.marcadores.push(nuevoMarcador);
    this.guardarStorage();
    this.toastr$.showToast('success', 'Excelente!', 'Marcador agregado con exito');
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

  guardarStorage() {
    localStorage.setItem('marcadores', JSON.stringify(this.marcadores));
  }

}
