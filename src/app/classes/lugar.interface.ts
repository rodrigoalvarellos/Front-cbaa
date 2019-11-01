export interface Lugar {
    lat: number;
    lng: number;
    setsCoords(lat: number, lng: number): void;
    getCoords(): {lat: number, lng: number};
}
