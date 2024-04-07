import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecommendedProductsService } from '@ecommerce/product-data-access';
import { ProductCardComponent } from '@ecommerce/product-ui';

@Component({
    selector: 'ecommerce-home',
    standalone: true,
    imports: [CommonModule, ProductCardComponent],
    templateUrl: './home.component.html',
    styleUrl: './home.component.css',
})
export class HomeComponent {
    recommendService = inject(RecommendedProductsService);
    products$ = this.recommendService.getProducts();
}
