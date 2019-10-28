import { NbMenuItem } from '@nebular/theme';

export const MENU_ITEMS: NbMenuItem[] = [
  {
    title: 'Dashboard',
    icon: 'home-outline',
    link: '/pages/dashboard',
    home: true,
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
