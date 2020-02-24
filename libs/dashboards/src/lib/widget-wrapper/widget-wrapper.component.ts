import { Component, ChangeDetectionStrategy, Injector, Input, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { WidgetRegistry, WidgetConfiguration } from '@ng-config-driven/ui-shared';
import { Widget } from '@ng-config-driven/api-interfaces';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'ng-config-driven-widget-wrapper',
  templateUrl: './widget-wrapper.component.html',
  styleUrls: ['./widget-wrapper.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WidgetWrapperComponent implements OnChanges {
  @Input() widget: Widget;

  component: Observable<any>;
  componentInjector: Injector;

  constructor(private injector: Injector) {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.widget.currentValue) {
      this.loadComponent(changes.widget.currentValue);
    }
  }

  loadComponent(widget: Widget): void {
    const config = new WidgetConfiguration(widget.config);

    this.componentInjector = Injector.create({
      providers: [{ provide: WidgetConfiguration, deps: [], useValue: config }],
      parent: this.injector,
      name: ''
    });
    this.component = of(WidgetRegistry.get(widget.type));
  }
}
