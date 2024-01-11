export const AUTH_ROUTES = [
        { path: 'error', loadChildren: () => import('./error/error.routes').then(m => m.ERROR_ROUTES) },
        { path: 'access', loadChildren: () => import('./access/access.routes').then(m => m.ACCESS_ROUTES) },
        { path: 'login', loadChildren: () => import('./login/login.routes').then(m => m.LOGIN_ROUTES) },
        { path: '**', redirectTo: '/notfound' }
    ]
