import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardDepositComponent } from './dashboard-deposit.component';

describe('DashboardDepositComponent', () => {
  let component: DashboardDepositComponent;
  let fixture: ComponentFixture<DashboardDepositComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DashboardDepositComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DashboardDepositComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
