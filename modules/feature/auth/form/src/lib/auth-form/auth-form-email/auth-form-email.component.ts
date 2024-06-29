import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthFormComponent } from '../auth-form.component';

@Component({
    selector: 'ecommerce-auth-form-email',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './auth-form-email.component.html',
    styleUrl: './auth-form-email.component.css',
})
export class AuthFormEmailComponent {
    control = inject(AuthFormComponent).form.controls.email;
}
