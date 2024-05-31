import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ItemCartComponent } from './item-cart.component';
import { mockProducts } from '@ecommerce/product-data-access';

describe('ItemCartComponent', () => {
    let component: ItemCartComponent;
    let fixture: ComponentFixture<ItemCartComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [ItemCartComponent],
        }).compileComponents();

        fixture = TestBed.createComponent(ItemCartComponent);
        component = fixture.componentInstance;
        component.product = mockProducts[0];
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
