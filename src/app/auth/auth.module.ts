import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { NgxAuthRoutingModule } from './auth-routing.module';
import { NbAuthModule, NbDummyAuthStrategy, NbPasswordAuthStrategy, NbAuthJWTToken, NbAuthOptions } from '@nebular/auth';
import {
  NbAlertModule,
  NbButtonModule,
  NbCheckboxModule,
  NbInputModule,
} from '@nebular/theme';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

const NB_AUTH_OPTIONS: NbAuthOptions = {
  strategies: [
    NbDummyAuthStrategy.setup({ name: 'demo', delay: 3000 }),
    NbPasswordAuthStrategy.setup({
      name: 'email',
      baseEndpoint: 'http://localhost:3000/auth',
      token: { class: NbAuthJWTToken, key: 'token' },
      login: {
        endpoint: '/login',
        method: 'post',
        redirect: { success: '/pages/dashboard', failure: null },
        defaultErrors: ['Email o password incorrectos. Intenta nuevamente'],
        defaultMessages: ['En breve seras redirigido al Home'],
      },
      register: {
        endpoint: '/register',
        method: 'post',
        redirect: { success: '/pages/dashboard', failure: null },
        defaultErrors: ['Intenta nuevamente dentro de un momento'],
        defaultMessages: ['Te registraste correctamente.'],
      },
    }),
  ],
  forms: {
    login: {
      redirectDelay: 500,
      strategy: 'email',
      rememberMe: true,
      showMessages: { success: true, error: true },
    },
    register: {
      redirectDelay: 500,
      strategy: 'email',
      showMessages: { success: true, error: true },
    },
    validation: {
      email: { required: true },
      password: { required: true, minLength: 8, maxLength: 50 },
      // fullName: { required: false, minLength: 4, maxLength: 50 },
    },
  },
};

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    NbAlertModule,
    NbInputModule,
    NbButtonModule,
    NbCheckboxModule,
    NgxAuthRoutingModule,
    NbAuthModule,
    NbAuthModule.forRoot(NB_AUTH_OPTIONS),
  ],
  declarations: [
    LoginComponent,
    RegisterComponent,
  ],
})
export class AuthModule {}

