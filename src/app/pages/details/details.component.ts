import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrl: './details.component.scss',
})
export class DetailsComponent {
  private router = inject(Router);

  navigateToVideos() {
    this.router.navigate(['/home/details/videos']);
  }
}
