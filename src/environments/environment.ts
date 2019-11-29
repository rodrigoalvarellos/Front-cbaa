/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  BASE_API_URL : 'http://localhost:3000',
  firebase: {
    apiKey: 'AIzaSyB_-uMT7qqkLFptaVxpq0GbzKfJmpbFnXY',
    authDomain: 'cba-accesible.firebaseapp.com',
    databaseURL: 'https://cba-accesible.firebaseio.com',
    projectId: 'cba-accesible',
    storageBucket: 'cba-accesible.appspot.com',
    messagingSenderId: '97607241789',
    appId: '1:97607241789:web:e2021d7935970b78379a54'
  },
};
