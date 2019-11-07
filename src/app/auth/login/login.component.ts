import { Component, OnInit } from '@angular/core';
import { NbLoginComponent } from '@nebular/auth';

@Component({
  selector: 'cba-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent extends NbLoginComponent {}
