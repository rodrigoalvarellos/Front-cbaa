import { Component, OnInit } from '@angular/core';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'cba-demo',
  template: `
  <router-outlet></router-outlet>
  `,
  styles: [],
})
export class DemoComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
