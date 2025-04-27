import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { IncomeChartComponent } from './income-chart.component';

describe('IncomeChartComponent', () => {
  let component: IncomeChartComponent;
  let fixture: ComponentFixture<IncomeChartComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [IncomeChartComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(IncomeChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
