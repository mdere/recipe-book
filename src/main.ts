// import { bootstrap } from '@angular/platform-browser-dynamic';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';

import { AppModule, environment } from './app/';

if (environment.production) {
  enableProdMode();
}

// bootstrap(AppComponent, [APP_ROUTES_PROVIDERS, ShoppingListService]);
platformBrowserDynamic().bootstrapModule(AppModule);