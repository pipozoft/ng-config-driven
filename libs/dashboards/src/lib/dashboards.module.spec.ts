import { async, TestBed } from '@angular/core/testing';
import { DashboardsModule } from './dashboards.module';

describe('DashboardsModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [DashboardsModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(DashboardsModule).toBeDefined();
  });
});
