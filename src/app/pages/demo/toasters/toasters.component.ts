import { Component, OnInit } from '@angular/core';
import { ToastrService } from '../../../services/toastr.service';



@Component({
  selector: 'cba-toasters',
  templateUrl: './toasters.component.html',
  styleUrls: ['./toasters.component.scss'],
})
export class ToastersComponent implements OnInit {

  constructor( private toastr$: ToastrService) {}

  ngOnInit() { }

  clickButtonToaster() {
    this.toastr$.showToast('success', 'Este es el titulo', 'Este es el body');
  }

}


