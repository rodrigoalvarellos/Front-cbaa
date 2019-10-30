export class Marcador {

    public lat: number;
    public lng: number;
    public icon: any;
    public label: any;

    public img = 'assets/images/no-image.jpg';
    public titulo = 'Sin Título';
    public descripcion = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat odio suscipit, consectetur saepe asperiores ut! Doloremque corrupti voluptates voluptatem nesciunt commodi eum animi nobis ipsum dolorum cum. Cumque, quibusdam dolore!';

    private colors = ['red', 'blue', 'green', 'lightblue', 'yellow', 'orange', 'purple'];

    constructor(lat: number, lng: number, color: string = 'red') {
        this.lat = lat;
        this.lng = lng;
        this.icon = this.setIconURL(color);
    }

    setIconURL(color?: string): any {

        let urlMarker = 'assets/map-markers/red-marker.svg';

        if (this.colors.indexOf(color) >= 0) {
            urlMarker = `assets/map-markers/${color}-marker.svg`;
        }

        return {
            url: urlMarker,
            scaledSize: { width: 40, height: 40 },
        };
    }

    setLabel( texto: any, color: string = 'white') {

        return {
            color: 'white',
            fontFamily: '',
            fontSize: '14px',
            fontWeight: 'bold',
            text: texto,
        };
    }

}
