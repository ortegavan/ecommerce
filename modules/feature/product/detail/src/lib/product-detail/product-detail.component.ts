import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { getParams } from './get-params';
import { switchMap } from 'rxjs';
import {
    CartService,
    ProductSearchService,
} from '@ecommerce/product-data-access';
import { ProductCardComponent } from '@ecommerce/product-ui';
import { QuantityDescriptionPipe } from '../pipes/quantity-description.pipe';
import { MatButtonModule } from '@angular/material/button';

@Component({
    selector: 'ecommerce-product-detail',
    standalone: true,
    imports: [
        CommonModule,
        ProductCardComponent,
        QuantityDescriptionPipe,
        MatButtonModule,
    ],
    templateUrl: './product-detail.component.html',
    styleUrl: './product-detail.component.css',
})
export class ProductDetailComponent {
    productSearchService = inject(ProductSearchService);
    cartService = inject(CartService);

    product$ = getParams().pipe(
        switchMap((id) => this.productSearchService.getById(id))
    );
}
