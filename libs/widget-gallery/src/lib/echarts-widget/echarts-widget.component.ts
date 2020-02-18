import { Component, Inject, ChangeDetectionStrategy, AfterViewInit, ChangeDetectorRef } from '@angular/core';
import { Widget, WidgetConfig, RegisterWidget, DataQueriesService, UIHelperService } from '@ng-config-driven/ui-shared';
import { ECharts, EChartsOptionConfig } from 'echarts';

import './maps/world.js';
import './maps/germany.js';

import { BaseWidgetComponent } from '../base-widget/base-widget.component.js';

@RegisterWidget('EchartsWidget')
@Component({
  selector: 'ng-config-driven-echarts-widget',
  templateUrl: './echarts-widget.component.html',
  styleUrls: ['./echarts-widget.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EchartsWidgetComponent extends BaseWidgetComponent implements AfterViewInit {
  updateOptions: EChartsOptionConfig;
  theme: string;
  eChartsInstance: ECharts;

  constructor(
    @Inject(Widget) public config: WidgetConfig,
    protected dataQueriesService: DataQueriesService,
    protected cd: ChangeDetectorRef,
    private uiHelper: UIHelperService,
  ) {
    super(config, dataQueriesService, cd);
  }

  ngAfterViewInit(): void {
    this.getData(this.config.queryUri, data => {
      // Update chart with transformed data
      this.updateOptions = Object.assign({}, data);
    });

    this.uiHelper.theme$
    .subscribe(theme => {
      this.theme = theme;
      this.cd.detectChanges();
    });
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
}
