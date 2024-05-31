import { Injectable, computed, signal } from '@angular/core';
import { Product } from '../../models/product.model';
import { BehaviorSubject, map } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class CartService {
    // Abaixo, gerenciamento com observables
    // private cartSubject$ = new BehaviorSubject<Product[]>([]);
    // cart$ = this.cartSubject$.asObservable();
    // quantity$ = this.cart$.pipe(map((products) => products.length));

    // addToCart(product: Product) {
    //     const cart = this.cartSubject$.getValue();
    //     this.cartSubject$.next([...cart, product]);
    // }

    // A seguir, gerenciamento com signals
    private cartSignal = signal<Product[]>([]);
    cart = this.cartSignal.asReadonly();
    quantity = computed(() => this.cart().length);

    addToCart(product: Product) {
        this.cartSignal.update((cart) => [...cart, product]);
    }

    removeFromCart(product: Product) {
        this.cartSignal.update((cart) =>
            cart.filter((p) => p.id !== product.id)
        );
    }
}
