import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BaseWidgetComponent } from './base-widget.component';
import { UiSharedModule, WidgetConfiguration } from '@ng-config-driven/ui-shared';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

describe('BaseWidgetComponent', () => {
  let component: BaseWidgetComponent;
  let fixture: ComponentFixture<BaseWidgetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        CommonModule,
        HttpClientModule,
        UiSharedModule.forRoot()
      ],
      declarations: [ BaseWidgetComponent ],
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
    fixture = TestBed.createComponent(BaseWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
