// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  //se agrega esto para la base de datos en cloud firebase
  firebaseConfig : {
    apiKey: "AIzaSyBSVVMPQwJsqCgTTNe07HPMX3z2GImD9Y8",
    authDomain: "pariso-restaurante.firebaseapp.com",
    databaseURL: "https://pariso-restaurante-default-rtdb.firebaseio.com",
    projectId: "pariso-restaurante",
    storageBucket: "pariso-restaurante.appspot.com",
    messagingSenderId: "635187704519",
    appId: "1:635187704519:web:6ca36efb27c9f2a8fd84e2",
    measurementId: "G-QRKEDQSF2N"
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
