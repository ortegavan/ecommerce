import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProductCartComponent } from './product-cart.component';

describe('ProductCartComponent', () => {
    let component: ProductCartComponent;
    let fixture: ComponentFixture<ProductCartComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [ProductCartComponent],
        }).compileComponents();

        fixture = TestBed.createComponent(ProductCartComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
