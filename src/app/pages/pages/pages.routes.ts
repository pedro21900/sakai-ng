import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

export const PAGES_ROUTES = [
        { path: 'crud', loadChildren: () => import('./crud/crud.routes').then(m => m.CRUD_ROUTES) },
        { path: 'empty', loadChildren: () => import('./empty/emptydemo.routes').then(m => m.EMPTYDEMO_ROUTES) },
        { path: 'timeline', loadChildren: () => import('./timeline/timelinedemo.routes').then(m => m.TIMELINEDEMO_ROUTES) },
        { path: '**', redirectTo: '/notfound' }
    ]
