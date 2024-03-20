import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule, FormControl } from '@angular/forms';
import { ProductSearchService } from '@ecommerce/product-data-access';
import {
    Observable,
    debounceTime,
    distinctUntilChanged,
    filter,
    switchMap,
} from 'rxjs';
import { Product } from 'modules/data-access/product/src/lib/models/product.model';

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
export class ProductSearchComponent implements OnInit {
    control = new FormControl('', { nonNullable: true });
    products$!: Observable<Product[]>;
    productSearchService = inject(ProductSearchService);

    ngOnInit(): void {
        this.products$ = this.control.valueChanges.pipe(
            debounceTime(333),
            distinctUntilChanged(),
            filter((text) => text.length > 1),
            switchMap((text) => this.productSearchService.searchByName(text))
        );
    }
}
