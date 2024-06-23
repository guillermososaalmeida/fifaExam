import { Component, Input, inject } from '@angular/core';
import { Router } from '@angular/router';
import { Player } from '../../classes/Player.class';

@Component({
  selector: 'app-home-card',
  templateUrl: './home-card.component.html',
  styleUrl: './home-card.component.scss',
})
export class HomeCardComponent {
  private router = inject(Router);

  @Input() player: Player = {} as Player;

  navigateToDetails(id: number): void {
    this.router.navigate([`/home/details/${id}`]);
  }
}
