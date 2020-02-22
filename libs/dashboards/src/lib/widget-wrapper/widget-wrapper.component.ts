import { Component, ChangeDetectionStrategy, Injector, Input, OnInit } from '@angular/core';
import { WidgetRegistry, WidgetConfiguration } from '@ng-config-driven/ui-shared';
import { Widget } from '@ng-config-driven/api-interfaces';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'ng-config-driven-widget-wrapper',
  templateUrl: './widget-wrapper.component.html',
  styleUrls: ['./widget-wrapper.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WidgetWrapperComponent implements OnInit {
  @Input() widget: Widget;

  component: Observable<any>;
  componentInjector: Injector;

  constructor(private injector: Injector) {}

  ngOnInit(): void {
    this.loadComponent();
  }

  loadComponent() {
    const widget = new WidgetConfiguration(this.widget.config);

    this.componentInjector = Injector.create({
      providers: [{ provide: WidgetConfiguration, deps: [], useValue: widget }],
      parent: this.injector,
      name: ''
    });
    this.component = of(WidgetRegistry.get(this.widget.type));
  }
}
