import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
    ReactiveFormsModule,
    FormControl,
    FormGroup,
    Validators,
} from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { MatCardModule } from '@angular/material/card';

@Component({
    selector: 'ecommerce-auth-form',
    standalone: true,
    imports: [CommonModule, RouterOutlet, ReactiveFormsModule, MatCardModule],
    templateUrl: './auth-form.component.html',
    styleUrl: './auth-form.component.css',
})
export class AuthFormComponent {
    form = new FormGroup({
        email: new FormControl('', {
            validators: [Validators.required, Validators.email],
            nonNullable: true,
        }),
        password: new FormControl('', [
            Validators.required,
            Validators.minLength(6),
        ]),
    });
}
