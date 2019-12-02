import { ExtraOptions, RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import {
  NbAuthComponent,
  NbLoginComponent,
  NbLogoutComponent,
  NbRegisterComponent,
  NbRequestPasswordComponent,
  NbResetPasswordComponent,
} from '@nebular/auth';

const routes: Routes = [
  {
    path: 'landing',
    component: LandingPageComponent,
  },
  {
    path: 'pages',
    // loadChildren: () => import('app/pages/pages.module')
    loadChildren: () => import('./pages/pages.module')
      .then(m => m.PagesModule),
  },
  {
    path: 'auth',
    // loadChildren: './auth/auth.module#AuthModule',
    loadChildren: () => import('./auth/auth.module')
    .then(m => m.AuthModule),
  },
  { path: '', redirectTo: '/landing', pathMatch: 'full' },
  { path: '**', redirectTo: 'landing' },
];

const config: ExtraOptions = {
  useHash: true,
};

@NgModule({
  imports: [RouterModule.forRoot(routes, config)],
  exports: [RouterModule],
})
export class AppRoutingModule { }

// {
//   path: 'auth',
//   component: NbAuthComponent,
//   children: [
//     {
//       path: '',
//       component: NbLoginComponent,
//     },
//     {
//       path: 'login',
//       component: NbLoginComponent,
//     },
//     {
//       path: 'register',
//       component: NbRegisterComponent,
//     },
//     {
//       path: 'logout',
//       component: NbLogoutComponent,
//     },
//     {
//       path: 'request-password',
//       component: NbRequestPasswordComponent,
//     },
//     {
//       path: 'reset-password',
//       component: NbResetPasswordComponent,
//     },
//   ],
// },
