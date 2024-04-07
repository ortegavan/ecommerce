import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { Product } from '@ecommerce/product-data-access';

@Component({
    selector: 'ecommerce-product-card',
    standalone: true,
    imports: [CommonModule, MatCardModule],
    templateUrl: './product-card.component.html',
    styleUrl: './product-card.component.css',
})
export class ProductCardComponent {
    @Input() product!: Product;
}
