// This file is required by karma.conf.js and loads recursively all the .spec and framework files

import 'zone.js/dist/zone-testing';
import { getTestBed } from '@angular/core/testing';
import {
  BrowserDynamicTestingModule,
  platformBrowserDynamicTesting
} from '@angular/platform-browser-dynamic/testing';

declare const require: any;

// First, initialize the Angular testing environment.
getTestBed().initTestEnvironment(
  BrowserDynamicTestingModule,
  platformBrowserDynamicTesting()
);
// Then we find all the tests.
const context = require.context('./', true, /\.spec\.ts$/);
// And load the modules.
context.keys().map(context);

// "scripts": {
//   //   "ng": "ng",
//   //   "start": "ng serve",
//   //   "build": "ng build",
//   //   "test": "ng test",
//   //   "lint": "ng lint",
//   //   "e2e": "ng e2e",
//   //   "compile:server": "webpack --config webpack.server.config.js --progress --colors",
//   //   "serve:ssr": "node dist/server",
//   //   "build:ssr": "npm run build:client-and-server-bundles && npm run compile:server",
//   //   "build:client-and-server-bundles": "ng build --prod && ng run lead-mngr:server:production --bundleDependencies all"
//   // }
