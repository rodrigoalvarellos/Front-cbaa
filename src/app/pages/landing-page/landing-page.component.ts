import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { NbSpinnerService } from '@nebular/theme';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'cba-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class LandingPageComponent implements OnInit {

  constructor(private spinner$: NbSpinnerService, public login$: LoginService ) { }

  ngOnInit() {
    this.spinner$.load();
  }

}
