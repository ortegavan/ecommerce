import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ProductDetailComponent } from './product-detail.component';
import { of } from 'rxjs';
import {
    ProductSearchService,
    mockProducts,
} from '@ecommerce/product-data-access';

describe('ProductDetailComponent', () => {
    let component: ProductDetailComponent;
    let fixture: ComponentFixture<ProductDetailComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [ProductDetailComponent, RouterTestingModule],
            providers: [
                {
                    provide: ProductSearchService,
                    useValue: {
                        getById: () => of(mockProducts[0]),
                    },
                },
            ],
        }).compileComponents();

        fixture = TestBed.createComponent(ProductDetailComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
