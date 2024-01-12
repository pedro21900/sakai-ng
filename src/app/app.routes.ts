import {Routes} from '@angular/router';
import {NotfoundComponent} from './pages/notfound/notfound.component';
import {AppLayoutComponent} from "./@core/layout/app.layout.component";

export const routes: Routes = [
    {
        path: '', component: AppLayoutComponent,
        children: [
            { path: '', loadChildren: () => import('./pages/dashboard/dashboard.routes').then(m => m.DASHBOARD_ROUTES) },
            { path: 'uikit', loadChildren: () => import('./pages/uikit/uikit.routes').then(m => m.UIKIT_ROUTES) },
            { path: 'utilities', loadChildren: () => import('./pages/utilities/utilities.routes').then(m => m.ULTILITIES_ROUTES) },
            { path: 'documentation', loadChildren: () => import('./pages/documentation/documentation.routes').then(m => m.DOCUMENTATION_ROUTES) },
            { path: 'blocks', loadChildren: () => import('./pages/primeblocks/primeblocks.routes').then(m => m.PRIMEBLOCKS_ROUTES) },
            { path: 'pages', loadChildren: () => import('./pages/pages/pages.routes').then(m => m.PAGES_ROUTES) }
        ]
    },
    { path: 'auth', loadChildren: () => import('./@core/auth/auth.routes').then(m => m.AUTH_ROUTES) },
    { path: 'home', loadChildren: () => import('./pages/home/home.routes').then(m => m.HOME_ROUTES) },
    { path: 'notfound', component: NotfoundComponent },
    { path: '**', redirectTo: '/notfound' }
]
