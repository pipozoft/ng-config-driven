import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EchartsWidgetComponent } from './echarts-widget.component';
import { CommonModule } from '@angular/common';
import { NgxEchartsModule } from 'ngx-echarts';
import { UiSharedModule, WidgetConfiguration } from '@ng-config-driven/ui-shared';
import { HttpClientModule } from '@angular/common/http';

import * as echarts from 'echarts';

describe('EchartsWidgetComponent', () => {
  let component: EchartsWidgetComponent;
  let fixture: ComponentFixture<EchartsWidgetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        CommonModule,
        HttpClientModule,
        NgxEchartsModule.forRoot({
          echarts,
        }),
        UiSharedModule.forRoot()
      ],
      declarations: [ EchartsWidgetComponent ],
      providers: [
        {
          provide: WidgetConfiguration,
          useValue: {
            config: {},
          }
        }
      ]
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
