import { Lugar } from './lugar.interface';

export class Marcador implements Lugar {

    public lat: number;
    public lng: number;
    public icon: any;
    public label: any;
    public img = 'assets/images/no-image.jpg';
    public titulo = '';
    public descripcion = '';
    private colors = ['red', 'blue', 'green', 'lightblue', 'yellow', 'orange', 'purple'];

    constructor(lat: number, lng: number, color: string = 'red') {
        this.setsCoords(lat, lng);
        this.setIconURL(color);
    }

    getCoords(): { lat: number; lng: number; } {
       return { lat: this.lat, lng:  this.lng};
    }

    setsCoords(lat: number, lng: number): void {
        this.lat = lat;
        this.lng = lng;
    }

    setIconURL(color?: string): any {

        let urlMarker = 'assets/map-markers/red-marker.svg';

        if (this.colors.indexOf(color) >= 0) {
            urlMarker = `assets/map-markers/${color}-marker.svg`;
        }

        this.icon = {
            url: urlMarker,
            scaledSize: { width: 40, height: 40 },
        };
    }

    setLabel( texto: any, color: string = 'white') {

        this.label = {
            color: 'white',
            fontFamily: '',
            fontSize: '14px',
            fontWeight: 'bold',
            text: texto,
        };
    }

}
