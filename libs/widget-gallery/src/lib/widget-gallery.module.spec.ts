import { async, TestBed } from '@angular/core/testing';
import { WidgetGalleryModule } from './widget-gallery.module';

describe('WidgetGalleryModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [WidgetGalleryModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(WidgetGalleryModule).toBeDefined();
  });
});
