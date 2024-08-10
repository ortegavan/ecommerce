import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthFormComponent } from '../auth-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { AuthService } from '@ecommerce/auth-data-access';
import { Router } from '@angular/router';

@Component({
    selector: 'ecommerce-auth-form-password',
    standalone: true,
    imports: [
        CommonModule,
        MatButtonModule,
        MatInputModule,
        ReactiveFormsModule,
    ],
    templateUrl: './auth-form-password.component.html',
    styleUrl: './auth-form-password.component.css',
})
export class AuthFormPasswordComponent {
    email = inject(AuthFormComponent).form.controls.email;
    password = inject(AuthFormComponent).form.controls.password;
    authService = inject(AuthService);
    router = inject(Router);

    login() {
        this.authService.setEmail(this.email.value);
        this.router.navigate(['/']);
    }
}
