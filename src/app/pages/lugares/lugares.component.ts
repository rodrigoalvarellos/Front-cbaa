import { Component, OnInit } from '@angular/core';
import { NbSidebarService } from '@nebular/theme';

@Component({
  selector: 'cba-lugares',
  template: `
  <router-outlet></router-outlet>
  `,
  styles: [],
})
export class LugaresComponent implements OnInit {

  constructor( private sidebar$: NbSidebarService ) { }

  ngOnInit() {

    this.sidebar$.toggle(true, 'menu-sidebar');
    // this.sidebar$.collapse('menu-sidebar');
  }

}
