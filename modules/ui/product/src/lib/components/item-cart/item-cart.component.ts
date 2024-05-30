import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '@ecommerce/product-data-access';

@Component({
    selector: 'ecommerce-item-cart',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './item-cart.component.html',
    styleUrl: './item-cart.component.css',
})
export class ItemCartComponent {
    @Input() product!: Product;
}
