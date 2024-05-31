import { Component, Input, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatBadgeModule } from '@angular/material/badge';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { Router } from '@angular/router';

@Component({
    selector: 'ecommerce-cart',
    standalone: true,
    imports: [CommonModule, MatBadgeModule, MatButtonModule, MatIconModule],
    templateUrl: './cart.component.html',
    styleUrl: './cart.component.css',
})
export class CartComponent {
    @Input() quantity = 0;

    router = inject(Router);

    public openCart(): void {
        this.router.navigate(['/cart']);
    }
}
