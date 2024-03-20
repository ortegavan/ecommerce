import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProductSearchComponent } from './product-search.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('ProductSearchComponent', () => {
    let component: ProductSearchComponent;
    let fixture: ComponentFixture<ProductSearchComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [
                ProductSearchComponent,
                NoopAnimationsModule,
                HttpClientTestingModule,
            ],
        }).compileComponents();

        fixture = TestBed.createComponent(ProductSearchComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
