// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: "AIzaSyChjI6PZEmsAIt_5gAH0G2yuCMd8OtIU_o",
    authDomain: "taa-gli.firebaseapp.com",
    databaseURL: "https://taa-gli.firebaseio.com",
    projectId: "taa-gli",
    storageBucket: "taa-gli.appspot.com",
    messagingSenderId: "722953440543"
  }
};
