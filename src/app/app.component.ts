/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { Component, OnInit } from '@angular/core';
import { AnalyticsService } from './@core/utils/analytics.service';
import { LugaresService } from './services/lugares.service';

@Component({
  selector: 'ngx-app',
  template: '<router-outlet></router-outlet>',
})
export class AppComponent implements OnInit {

  constructor(private analytics: AnalyticsService, private lugares$: LugaresService) {
  }

  ngOnInit() {
    this.analytics.trackPageViews();
    this.lugares$.conectarServer().subscribe(
      data => console.log(data),
    );
  }
}
