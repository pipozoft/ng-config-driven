import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EchartsWidgetComponent } from './echarts-widget.component';

describe('EchartsWidgetComponent', () => {
  let component: EchartsWidgetComponent;
  let fixture: ComponentFixture<EchartsWidgetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EchartsWidgetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EchartsWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
