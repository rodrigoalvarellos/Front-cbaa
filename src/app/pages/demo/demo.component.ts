import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'demo',
  template: `
  <router-outlet></router-outlet>
  `,
  styles: []
})
export class DemoComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
