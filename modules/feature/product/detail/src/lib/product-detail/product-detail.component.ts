import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { getParams } from './get-params';

@Component({
    selector: 'ecommerce-product-detail',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './product-detail.component.html',
    styleUrl: './product-detail.component.css',
})
export class ProductDetailComponent {
    id$ = getParams();
}
