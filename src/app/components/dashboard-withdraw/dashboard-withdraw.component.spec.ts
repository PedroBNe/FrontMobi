import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardWithdrawComponent } from './dashboard-withdraw.component';

describe('DashboardWithdrawComponent', () => {
  let component: DashboardWithdrawComponent;
  let fixture: ComponentFixture<DashboardWithdrawComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DashboardWithdrawComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DashboardWithdrawComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
