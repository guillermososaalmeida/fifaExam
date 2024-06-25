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
  devBranch: boolean = false;
  masterBranch: boolean = false;

  ngOnInit(): void {
    window.location.href.includes('fifa-exam-develop')
      ? (this.devBranch = true)
      : window.location.href.includes('fifa-exam')
        ? (this.masterBranch = true)
        : null;

    this.branchName = this.devBranch
      ? 'Develop'
      : this.masterBranch
        ? 'Master'
        : 'Localhost';
  }
}
