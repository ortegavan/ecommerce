import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthFormComponent } from '../auth-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { RouterModule } from '@angular/router';

@Component({
    selector: 'ecommerce-auth-form-email',
    standalone: true,
    imports: [
        CommonModule,
        MatButtonModule,
        MatInputModule,
        ReactiveFormsModule,
        RouterModule,
    ],
    templateUrl: './auth-form-email.component.html',
    styleUrl: './auth-form-email.component.css',
})
export class AuthFormEmailComponent {
    control = inject(AuthFormComponent).form.controls.email;
}
