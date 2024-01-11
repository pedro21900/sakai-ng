import {enableProdMode, importProvidersFrom} from '@angular/core';


import {environment} from './environments/environment';
import {bootstrapApplication} from '@angular/platform-browser';
import {AppComponent} from './app/app.component';

import {ProductService} from './app/service/product.service';
import {PhotoService} from './app/service/photo.service';
import {NodeService} from './app/service/node.service';
import {IconService} from './app/service/icon.service';
import {EventService} from './app/service/event.service';
import {CustomerService} from './app/service/customer.service';
import {CountryService} from './app/service/country.service';
import {HashLocationStrategy, LocationStrategy} from '@angular/common';
import {provideHttpClient} from "@angular/common/http";
import {provideRouter} from "@angular/router";
import {routes} from "./app/app.routes";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";


if (environment.production) {
  enableProdMode();
}

bootstrapApplication(AppComponent, {
    providers: [
        importProvidersFrom([BrowserAnimationsModule]),
        provideHttpClient(),
        provideRouter(routes),
        {provide: LocationStrategy, useClass: HashLocationStrategy},
        CountryService, CustomerService, EventService, IconService, NodeService,
        PhotoService, ProductService
    ]
})
  .catch(err => console.error(err));
