import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { getParams } from './get-params';
import { switchMap } from 'rxjs';
import { ProductSearchService } from '@ecommerce/product-data-access';
import { ProductCardComponent } from '@ecommerce/product-ui';
import { QuantityDescriptionPipe } from '../pipes/quantity-description.pipe';

@Component({
    selector: 'ecommerce-product-detail',
    standalone: true,
    imports: [CommonModule, ProductCardComponent, QuantityDescriptionPipe],
    templateUrl: './product-detail.component.html',
    styleUrl: './product-detail.component.css',
})
export class ProductDetailComponent {
    productSearchService = inject(ProductSearchService);

    product$ = getParams().pipe(
        switchMap((id) => this.productSearchService.getById(id))
    );
}
