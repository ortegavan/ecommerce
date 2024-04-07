import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { RecommendedProductsService } from '@ecommerce/product-data-access';

@Component({
    selector: 'ecommerce-home',
    standalone: true,
    imports: [CommonModule, MatCardModule],
    templateUrl: './home.component.html',
    styleUrl: './home.component.css',
})
export class HomeComponent {
    recommendService = inject(RecommendedProductsService);
    products$ = this.recommendService.getProducts();
}
