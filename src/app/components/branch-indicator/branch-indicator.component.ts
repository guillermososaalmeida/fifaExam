import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-branch-indicator',
  templateUrl: './branch-indicator.component.html',
  styleUrl: './branch-indicator.component.scss',
})
export class BranchIndicatorComponent implements OnInit {
  activatedRoute = inject(ActivatedRoute);
  router = inject(Router);

  branchName: string = '';

  ngOnInit(): void {
    this.branchName = this.activatedRoute.snapshot.params['branchName'];
  }
}
