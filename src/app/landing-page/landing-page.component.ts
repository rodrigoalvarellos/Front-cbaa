import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { NbSpinnerService } from '@nebular/theme';

@Component({
  selector: 'cba-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class LandingPageComponent implements OnInit {

  constructor(private spinner$: NbSpinnerService ) { }

  ngOnInit() {
    this.spinner$.load();
  }

}
