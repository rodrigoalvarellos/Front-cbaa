import { Component, OnInit } from '@angular/core';
import { CategoriasService } from '../../../services/categorias.service';
import { Observable } from 'rxjs';
import { ICategoria } from '../../../classes/categoria.interface';

@Component({
  selector: 'cba-categorias-admin',
  templateUrl: './categorias-admin.component.html',
  styleUrls: ['./categorias-admin.component.scss'],
})
export class CategoriasAdminComponent implements OnInit {

  categorias$: Observable<ICategoria[]>;
  selected: ICategoria;

  constructor( public catSvc: CategoriasService ) { }

  ngOnInit() {
    this.categorias$ = this.catSvc.getCategorias();
  }

}
