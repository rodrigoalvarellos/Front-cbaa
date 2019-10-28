import { Injectable } from '@angular/core';
import { NbToastrService, NbComponentStatus, NbGlobalPosition, NbGlobalPhysicalPosition, NbGlobalLogicalPosition } from '@nebular/theme';

@Injectable({
  providedIn: 'root',
})
export class ToastrService {

  constructor(private toastrService: NbToastrService) { }

  destroyByClick = true;
  duration = 2500;
  hasIcon = true;
  position: NbGlobalPosition = NbGlobalPhysicalPosition.TOP_RIGHT;
  preventDuplicates = false;
  status: NbComponentStatus = 'primary';

  statuses = {
    primary: 'primary',
    success: 'success',
    info: 'info',
    warning: 'warning',
    danger: 'danger',
  };

  positions = {
    TOP_RIGHT: NbGlobalPhysicalPosition.TOP_RIGHT,
    TOP_LEFT: NbGlobalPhysicalPosition.TOP_LEFT,
    BOTTOM_LEFT: NbGlobalPhysicalPosition.BOTTOM_LEFT,
    BOTTOM_RIGHT: NbGlobalPhysicalPosition.BOTTOM_RIGHT,
    TOP_END: NbGlobalLogicalPosition.TOP_END,
    TOP_START: NbGlobalLogicalPosition.TOP_START,
    BOTTOM_END: NbGlobalLogicalPosition.BOTTOM_END,
    BOTTOM_START: NbGlobalLogicalPosition.BOTTOM_START,
  };

  showToast(
    type: NbComponentStatus = this.status,
    title: string,
    body: string,
    duracion: number = this.duration,
    posicion: NbGlobalPosition = this.position ) {

    const config = {
      status: type,
      destroyByClick: this.destroyByClick,
      duration: duracion,
      hasIcon: this.hasIcon,
      position: posicion ,
      preventDuplicates: this.preventDuplicates,
    };

    this.toastrService.show(body, title, config );
  }


}
