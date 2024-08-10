import { Component } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { mockProducts } from '@ecommerce/product-data-access';
import { ProductCardComponent } from '@ecommerce/product-ui';
import { LogDirective } from './log.directive';

@Component({
    template: `
        <ecommerce-product-card
            ecommerceLog
            [product]="product"
        ></ecommerce-product-card>
    `,
})
class HostComponent {
    product = mockProducts[0];
}

describe('LogDirective', () => {
    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [HostComponent],
            imports: [LogDirective, ProductCardComponent],
            providers: [provideRouter([])],
        }).compileComponents();
    });

    it('should have cursor pointer', () => {
        const fixture = TestBed.createComponent(HostComponent);
        fixture.detectChanges();
        const card: HTMLElement = fixture.nativeElement.querySelector(
            'ecommerce-product-card'
        );
        expect(card.style.cursor).toBe('pointer');
    });
});
