import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '@ecommerce/product-data-access';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
    selector: 'ecommerce-item-cart',
    standalone: true,
    imports: [CommonModule, MatButtonModule, MatIconModule],
    templateUrl: './item-cart.component.html',
    styleUrl: './item-cart.component.css',
})
export class ItemCartComponent {
    @Input() product!: Product;
    @Input() quantity!: number;
    @Output() remove = new EventEmitter<Product>();
}
