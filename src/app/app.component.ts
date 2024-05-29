import { Component, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NxWelcomeComponent } from './nx-welcome.component';
import { LayoutModule } from '@ecommerce/layout';
import { ProductSearchComponent } from '@ecommerce/product-search';
import { MatIconModule } from '@angular/material/icon';
import { CartComponent } from '@ecommerce/product-ui';
import { CartService } from '@ecommerce/product-data-access';

@Component({
    standalone: true,
    imports: [
        NxWelcomeComponent,
        RouterModule,
        LayoutModule,
        ProductSearchComponent,
        MatIconModule,
        CartComponent,
    ],
    selector: 'ecommerce-root',
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
})
export class AppComponent {
    quantity = inject(CartService).quantity;
}
