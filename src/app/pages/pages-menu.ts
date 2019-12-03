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
    title: 'Organizaciones',
    icon: 'people-outline',
    link: '/pages/organizaciones',
  },
  {
    title: 'Eventos',
    icon: 'star-outline',
    link: '/pages/eventos',
  },
  {
    title: 'Donaciones',
    icon: 'heart-outline',
    link: '/pages/donaciones',
  },
  {
    title: 'Mi perfil',
    icon: 'person-outline',
    link: '/pages/perfil/ver-perfil',
  },
  {
    title: 'Moderar',
    icon: 'eye-outline',
    link: '/pages/moderar',
  },
  {
    title: 'Admin',
    icon: 'settings-2-outline',
    link: '/pages/admin',
  },
  {
    title: 'Demos',
    icon: 'flash-outline',
    children: [
      // {
      //   title: 'Main',
      //   link: '/pages/demo/main',
      // },
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
      {
        title: 'Fire Upload',
        link: '/pages/demo/fire-upload',
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
