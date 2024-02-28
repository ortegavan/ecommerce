import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('AppComponent', () => {
    let fixture: ComponentFixture<AppComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [AppComponent, RouterTestingModule],
        }).compileComponents();

        fixture = TestBed.createComponent(AppComponent);
    });

    it('should contain header', () => {
        const header: HTMLElement =
            fixture.nativeElement.querySelector('header');
        expect(header).toBeTruthy();
    });
});
