import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlbumCoverWallWidgetComponent } from './album-cover-wall-widget.component';

describe('AlbumCoverWallWidgetComponent', () => {
  let component: AlbumCoverWallWidgetComponent;
  let fixture: ComponentFixture<AlbumCoverWallWidgetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlbumCoverWallWidgetComponent ]
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
