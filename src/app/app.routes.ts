import { Route } from '@angular/router';

export const appRoutes: Route[] = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    {
        path: 'home',
        loadChildren: () => import('@ecommerce/home').then((r) => r.homeRoutes),
    },
];
