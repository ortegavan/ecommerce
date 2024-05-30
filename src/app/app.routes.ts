import { Route } from '@angular/router';

export const appRoutes: Route[] = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    {
        path: 'home',
        loadChildren: () => import('@ecommerce/home').then((r) => r.homeRoutes),
    },
    {
        path: 'product',
        loadChildren: () =>
            import('@ecommerce/product-detail').then(
                (r) => r.productDetailRoutes
            ),
    },
    {
        path: 'cart',
        loadComponent: () =>
            import('@ecommerce/product-cart').then(
                (r) => r.ProductCartComponent
            ),
    },
];
