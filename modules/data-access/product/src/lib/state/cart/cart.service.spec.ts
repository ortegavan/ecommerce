import { TestBed } from '@angular/core/testing';

import { CartService } from './cart.service';
import { mockProducts } from '../../mocks/product.mock';

describe('CartService', () => {
    let service: CartService;

    beforeEach(() => {
        TestBed.configureTestingModule({});
        service = TestBed.inject(CartService);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });

    it('should add product to cart', () => {
        service.addToCart(mockProducts[0]);
        expect(service.quantity()).toBe(1);
    });
});
