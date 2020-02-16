import { Component, OnInit, Inject, ChangeDetectionStrategy, Renderer2, ViewChild, ElementRef, AfterViewInit, ChangeDetectorRef } from '@angular/core';
import { Widget, WidgetConfig, RegisterWidget, DataQueriesService, UIHelperService } from '@ng-config-driven/ui-shared';
import { ECharts } from 'echarts';
import { map } from 'rxjs/operators';

import './maps/world.js';

import * as _ from 'lodash';

@RegisterWidget('EchartsWidget')
@Component({
  selector: 'ng-config-driven-echarts-widget',
  templateUrl: './echarts-widget.component.html',
  styleUrls: ['./echarts-widget.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EchartsWidgetComponent implements OnInit, AfterViewInit {
  updateOptions: any;
  theme: string;
  data: any[];
  eChartsInstance: ECharts;
  @ViewChild('themeHelper') themeHelper: ElementRef;

  constructor(
    @Inject(Widget) public config: WidgetConfig,
    private dataQueriesService: DataQueriesService,
    public uiHelper: UIHelperService,
    private cd: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    console.log(this.config);
  }

  ngAfterViewInit(): void {
    this.getData(this.config.queryUri);

    this.uiHelper.theme$
    .subscribe(theme => {
      this.theme = theme;
      this.cd.detectChanges();
      // if (this.themeHelper) {
      //   this.themeHelper.nativeElement.click();
      // }
    });
  }

  getData(uri: string): void {
    this.dataQueriesService.exec(uri)
    .pipe(
      map((reponse: any[]) => {
        // Save raw data
        this.data = Object.assign([], reponse);
        console.log('data', this.data)
        // Return transformed data
        return this.dataQueriesService.createTransformationFunction(
          this.config.transformationFunction
        )(reponse, {_});
      })
    )
    .subscribe(data => {
      // Update chart with transformed data
      this.updateOptions = Object.assign({}, data);
      this.cd.detectChanges();
      console.log('updateOptions', this.updateOptions);
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
