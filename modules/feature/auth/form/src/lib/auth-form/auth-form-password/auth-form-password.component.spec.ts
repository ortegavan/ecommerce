import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AuthFormPasswordComponent } from './auth-form-password.component';
import { AuthFormComponent } from '../auth-form.component';
import { provideRouter } from '@angular/router';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

describe('AuthFormPasswordComponent', () => {
    let component: AuthFormPasswordComponent;
    let fixture: ComponentFixture<AuthFormPasswordComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [AuthFormPasswordComponent, NoopAnimationsModule],
            providers: [AuthFormComponent, provideRouter([])],
        }).compileComponents();

        fixture = TestBed.createComponent(AuthFormPasswordComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
