/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { Component, OnInit } from '@angular/core';
import { AnalyticsService } from './@core/utils/analytics.service';
import { LoginService } from './services/login.service';

@Component({
  selector: 'ngx-app',
  template: '<router-outlet></router-outlet>',
})
export class AppComponent implements OnInit {

  constructor(private analytics: AnalyticsService, private login$: LoginService) {
  }

  ngOnInit() {
    // this.analytics.trackPageViews();
    // this.login$.conectarServer().subscribe(
    //   data => console.log(data),
    // );
  }
}
