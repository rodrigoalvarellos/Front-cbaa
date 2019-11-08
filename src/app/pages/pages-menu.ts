import { NbMenuItem } from '@nebular/theme';

export const MENU_ITEMS: NbMenuItem[] = [
  {
    title: 'Home',
    icon: 'home-outline',
    link: '/landing',
  },
  {
    title: 'Dashboard',
    icon: 'grid-outline',
    link: '/pages/dashboard',
  },
  {
    title: 'Lugares',
    icon: 'map-outline',
    link: '/pages/lugares',
  },
  {
    title: 'Perfil',
    icon: 'person-outline',
    link: '/pages/perfil/ver-perfil',
  },
  {
    title: 'Demos',
    icon: 'flash-outline',
    children: [
      {
        title: 'Main',
        link: '/pages/demo/main',
      },
      {
        title: 'Forms',
        link: '/pages/demo/forms',
      },
      {
        title: 'Modals',
        link: '/pages/demo/modals',
      },
      {
        title: 'Toasters',
        link: '/pages/demo/toasters',
      },
      {
        title: 'Maps',
        link: '/pages/demo/maps',
      },
    ],
  },
  // {
  //   title: 'FEATURES',
  //   group: true,
  // },
  // {
  //   title: 'Auth',
  //   icon: 'lock-outline',
  //   children: [
  //     {
  //       title: 'Login',
  //       link: '/auth/login',
  //     },
  //     {
  //       title: 'Register',
  //       link: '/auth/register',
  //     },
  //     {
  //       title: 'Request Password',
  //       link: '/auth/request-password',
  //     },
  //     {
  //       title: 'Reset Password',
  //       link: '/auth/reset-password',
  //     },
  //   ],
  // },
];
