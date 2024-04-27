import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { getParams } from './get-params';
import { switchMap } from 'rxjs';
import { ProductSearchService } from '@ecommerce/product-data-access';

@Component({
    selector: 'ecommerce-product-detail',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './product-detail.component.html',
    styleUrl: './product-detail.component.css',
})
export class ProductDetailComponent {
    productSearchService = inject(ProductSearchService);

    product$ = getParams().pipe(
        switchMap((id) => this.productSearchService.getById(id))
    );
}
