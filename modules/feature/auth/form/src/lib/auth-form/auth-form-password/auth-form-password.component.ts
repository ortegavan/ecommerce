import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthFormComponent } from '../auth-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';

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
    control = inject(AuthFormComponent).form.controls.password;
}
