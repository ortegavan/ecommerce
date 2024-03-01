import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule, FormControl } from '@angular/forms';
import { mockProducts } from '@ecommerce/product-data-access';

@Component({
    selector: 'ecommerce-product-search',
    standalone: true,
    imports: [
        CommonModule,
        MatAutocompleteModule,
        MatInputModule,
        MatFormFieldModule,
        ReactiveFormsModule,
    ],
    templateUrl: './product-search.component.html',
    styleUrl: './product-search.component.css',
})
export class ProductSearchComponent {
    control = new FormControl('');
    products = mockProducts;
}
