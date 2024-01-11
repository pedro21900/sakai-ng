import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { IconsComponent } from './icons/icons.component';


export const ULTILITIES_ROUTES =[
    { path: 'icons', data: { breadcrumb: 'Prime Icons' }, component: IconsComponent },
    { path: '**', redirectTo: '/notfound' }
    ]
