import { Component, OnInit, ChangeDetectionStrategy, Injector, Input, OnChanges, SimpleChange, SimpleChanges } from '@angular/core';
import { WidgetRegistry, Widget, UIHelperService, WidgetConfig } from '@ng-config-driven/ui-shared';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'ng-config-driven-base-widget',
  templateUrl: './base-widget.component.html',
  styleUrls: ['./base-widget.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BaseWidgetComponent implements OnInit, OnChanges {
  @Input() config: any;

  component: Observable<any>;
  componentInjector: Injector;

  constructor(
    private injector: Injector
  ) {}

  ngOnInit(): void {}

  ngOnChanges(change: SimpleChanges) {
    if (change.config.currentValue) {
      const widget = new Widget(change.config.currentValue.config);

      this.componentInjector = Injector.create({
        providers: [{ provide: Widget, deps: [], useValue: widget }],
        parent: this.injector,
        name: ''
      });
      this.component = of(WidgetRegistry.get(`EchartsWidget`));
    }
  }

}
