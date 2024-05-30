import { Component, Input, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartService } from '@ecommerce/product-data-access';
import { ItemCartComponent } from '@ecommerce/product-ui';

@Component({
    selector: 'ecommerce-product-cart',
    standalone: true,
    imports: [CommonModule, ItemCartComponent],
    templateUrl: './product-cart.component.html',
    styleUrl: './product-cart.component.css',
})
export class ProductCartComponent {
    cartService = inject(CartService);
    products = this.cartService.cart();
}
