import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BranchIndicatorComponent } from './branch-indicator.component';

describe('BranchIndicatorComponent', () => {
  let component: BranchIndicatorComponent;
  let fixture: ComponentFixture<BranchIndicatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BranchIndicatorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BranchIndicatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
