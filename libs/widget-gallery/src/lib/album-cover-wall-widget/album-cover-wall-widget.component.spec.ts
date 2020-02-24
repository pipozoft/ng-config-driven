import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlbumCoverWallWidgetComponent } from './album-cover-wall-widget.component';
import { CommonModule } from '@angular/common';
import { UiSharedModule, WidgetConfiguration } from '@ng-config-driven/ui-shared';
import { HttpClientModule } from '@angular/common/http';

describe('AlbumCoverWallWidgetComponent', () => {
  let component: AlbumCoverWallWidgetComponent;
  let fixture: ComponentFixture<AlbumCoverWallWidgetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        CommonModule,
        HttpClientModule,
        UiSharedModule.forRoot()
      ],
      declarations: [ AlbumCoverWallWidgetComponent ],
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
    fixture = TestBed.createComponent(AlbumCoverWallWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
