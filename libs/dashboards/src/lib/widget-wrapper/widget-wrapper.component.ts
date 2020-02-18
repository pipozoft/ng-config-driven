import { Component, ChangeDetectionStrategy, Injector, Input, OnChanges, SimpleChanges } from '@angular/core';
import { WidgetRegistry, Widget } from '@ng-config-driven/ui-shared';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'ng-config-driven-widget-wrapper',
  templateUrl: './widget-wrapper.component.html',
  styleUrls: ['./widget-wrapper.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WidgetWrapperComponent implements OnChanges {
  @Input() widget: any;

  component: Observable<any>;
  componentInjector: Injector;

  constructor(
    private injector: Injector
  ) {}

  ngOnChanges(change: SimpleChanges) {
    if (change.widget.currentValue) {
      const widget = new Widget(change.widget.currentValue.config);

      this.componentInjector = Injector.create({
        providers: [{ provide: Widget, deps: [], useValue: widget }],
        parent: this.injector,
        name: ''
      });
      this.component = of(WidgetRegistry.get(change.widget.currentValue.type));
    }
  }

}
