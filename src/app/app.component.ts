import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NxWelcomeComponent } from './nx-welcome.component';
import { LayoutModule } from '@ecommerce/layout';

@Component({
  standalone: true,
  imports: [NxWelcomeComponent, RouterModule, LayoutModule],
  selector: 'ecommerce-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'e-Commerce';
}
