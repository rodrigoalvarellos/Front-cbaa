import { Component, OnInit, Input } from '@angular/core';
import { Marcador } from './marcador.class';
import { ToastrService } from '../../../services/toastr.service';
import { InfoWindow } from '@agm/core/services/google-maps-types';

@Component({
  selector: 'cba-maps',
  templateUrl: './maps.component.html',
  styleUrls: ['./maps.component.scss'],
})
export class MapsComponent implements OnInit {


  marcadores: Marcador[] = [];
  lat = -31.4074091;
  lng = -64.1913104;
  @Input() zoom = 13;
  previous: InfoWindow;

  labelOptions = {
    color: 'white',
    fontFamily: '',
    fontSize: '14px',
    fontWeight: 'bold',
    text: '1',
  };


  iconMarker = {
    // url: 'assets/map-markers/red-marker.svg',
    // url: 'assets/map-markers/blue-marker.svg',
    // url: 'assets/map-markers/green-marker.svg',
    // url: 'assets/map-markers/lightblue-marker.svg',
    // url: 'assets/map-markers/yellow-marker.svg',
    // url: 'assets/map-markers/orange-marker.svg',
    url: 'assets/map-markers/purple-marker.svg',
    scaledSize: {
      width: 40,
      height: 40,
    },
  };

  constructor(private toastr$: ToastrService) {

    if (localStorage.getItem('marcadores')) {
      this.marcadores = JSON.parse(localStorage.getItem('marcadores'));
    }

  }

  ngOnInit() { }

  agregarMarcador(evento: any) {
    const coords: { lat: number, lng: number } = evento.coords;
    const nuevoMarcador = new Marcador(coords.lat, coords.lng);
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
