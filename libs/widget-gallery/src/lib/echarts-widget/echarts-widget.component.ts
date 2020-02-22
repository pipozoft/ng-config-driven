import { Component, Inject, ChangeDetectionStrategy, AfterViewInit, Injector } from '@angular/core';
import { RegisterWidget, UIHelperService, WidgetConfiguration } from '@ng-config-driven/ui-shared';
import { ECharts } from 'echarts';

import './maps/world.js';
import './maps/germany.js';
import { BaseWidgetComponent } from '../base-widget/base-widget.component';


@RegisterWidget('EchartsWidget')
@Component({
  selector: 'ng-config-driven-echarts-widget',
  templateUrl: './echarts-widget.component.html',
  styleUrls: ['./echarts-widget.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EchartsWidgetComponent extends BaseWidgetComponent implements AfterViewInit {
  updateOptions: any;
  theme: string;
  eChartsInstance: ECharts;

  constructor(
    @Inject(WidgetConfiguration) public config: WidgetConfiguration,
    private injector: Injector,
    private uiHelper: UIHelperService,
  ) {
    super(config, injector);
  }

  ngAfterViewInit(): void {
    this.getData(this.config.queryUri, data => {
      // Update chart with transformed data
      this.updateOptions = Object.assign({}, data);
    });

    this.subs.push(
      // Theme
      this.uiHelper.theme$
      .subscribe(theme => {
        this.theme = theme;
        this.cd.detectChanges();
      }),
      // Widget communication
      this.widgetCommunicationService.events$
      .subscribe(action => {
        this.action(action);
        this.cd.detectChanges();
      })
    );
  }

  onChartEvent(event): void {
    console.log(event);
  }

  onChartInit(instance: ECharts) {
    this.eChartsInstance = instance;
  }

  setTheme(theme: string) {
    this.theme = theme;
  }

  action({type, name}) {
    this.eChartsInstance.dispatchAction({
        type: type,
        name
    });
  }
}
