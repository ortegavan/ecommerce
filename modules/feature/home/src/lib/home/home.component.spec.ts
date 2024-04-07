import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HomeComponent } from './home.component';
import {
    RecommendedProductsService,
    mockProducts,
} from '@ecommerce/product-data-access';
import { of } from 'rxjs';

describe('HomeComponent', () => {
    let component: HomeComponent;
    let fixture: ComponentFixture<HomeComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [HomeComponent],
            providers: [
                {
                    provide: RecommendedProductsService,
                    useValue: {
                        getProducts: () => of(mockProducts),
                    },
                },
            ],
        }).compileComponents();

        fixture = TestBed.createComponent(HomeComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should render product cards correctly', () => {
        const cards: HTMLElement[] =
            fixture.nativeElement.querySelectorAll('mat-card');
        expect(cards.length).toBe(mockProducts.length);
    });
});
