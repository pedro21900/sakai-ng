import {MenusComponent} from "./menus/menus.component";

export const UIKIT_ROUTES =[
    { path: 'button', data: { breadcrumb: 'Button' }, loadChildren: () => import('./button/buttondemo.routes').then(m => m.BUTTONDEMO_ROUTES) },
    { path: 'charts', data: { breadcrumb: 'Charts' }, loadChildren: () => import('./charts/chartsdemo.routes').then(m => m.CHARTSDEMO_ROUTES) },
    { path: 'file', data: { breadcrumb: 'File' }, loadChildren: () => import('./file/filedemo.routes').then(m => m.FILEDEMO_ROUTES) },
    { path: 'floatlabel', data: { breadcrumb: 'Float Label' }, loadChildren: () => import('./floatlabel/floatlabeldemo.routes').then(m => m.FLOATLABELDEMO_ROUTES) },
    { path: 'formlayout', data: { breadcrumb: 'Form Layout' }, loadChildren: () => import('./formlayout/formlayoutdemo.routes').then(m => m.FORMLAYOUTDEMO_ROUTES) },
    { path: 'input', data: { breadcrumb: 'Input' }, loadChildren: () => import('./input/inputdemo.routes').then(m => m.INPUTDEMO_ROUTES) },
    { path: 'invalidstate', data: { breadcrumb: 'Invalid State' }, loadChildren: () => import('./invalid/invalidstatedemo.routes').then(m => m.INVALIDSTATEDEMO_ROUTES) },
    { path: 'list', data: { breadcrumb: 'List' }, loadChildren: () => import('./list/listdemo.routes').then(m => m.LISTDEMO_ROUTES) },
    { path: 'media', data: { breadcrumb: 'Media' }, loadChildren: () => import('./media/mediademo.routes').then(m => m.MEDIADEMO_ROUTES) },
    { path: 'message', data: { breadcrumb: 'Message' }, loadChildren: () => import('./messages/messagesdemo.routes').then(m => m.MESSAGESDEMO_ROUTES) },
    { path: 'misc', data: { breadcrumb: 'Misc' }, loadChildren: () => import('./misc/miscdemo.routes').then(m => m.MISCDDEMO_ROUTES) },
    { path: 'overlay', data: { breadcrumb: 'Overlay' }, loadChildren: () => import('./overlays/overlaysdemo.routes').then(m => m.OVERLAYSDEMO_ROUTES) },
    { path: 'panel', data: { breadcrumb: 'Panel' }, loadChildren: () => import('./panels/panelsdemo.routes').then(m => m.PANELSDEMO_ROUTES) },
    { path: 'table', data: { breadcrumb: 'Table' }, loadChildren: () => import('./table/tabledemo.routes').then(m => m.TABLEDEMO_ROUTES) },
    { path: 'tree', data: { breadcrumb: 'Tree' }, loadChildren: () => import('./tree/treedemo.routes').then(m => m.TREEDDEMO_ROUTES) },
    { path: 'menu', data: { breadcrumb: 'Menu' },component:MenusComponent },
    { path: '**', redirectTo: '/notfound' }
]
