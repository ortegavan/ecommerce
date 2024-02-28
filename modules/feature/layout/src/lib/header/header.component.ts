import { Component, Input } from '@angular/core';

@Component({
    selector: 'ecommerce-header',
    templateUrl: './header.component.html',
    styleUrl: './header.component.css',
})
export class HeaderComponent {
    @Input({ required: true }) title = '';
}
