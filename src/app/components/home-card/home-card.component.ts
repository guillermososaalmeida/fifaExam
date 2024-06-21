import { Component, Input, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-card',
  templateUrl: './home-card.component.html',
  styleUrl: './home-card.component.scss'
})
export class HomeCardComponent {
  private router = inject(Router);

  @Input() imagePlayer: string = '';

  navigateToDetails(): void {
    this.router.navigate([`/home/details`]);
  }
}
