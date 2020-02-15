import { Component, OnInit, Inject, ChangeDetectionStrategy, Renderer2, ViewChild, ElementRef } from '@angular/core';
import { Widget, WidgetConfig, RegisterWidget, DataQueriesService, UIHelperService } from '@ng-config-driven/ui-shared';
import { ECharts } from 'echarts';

@RegisterWidget('EchartsWidget')
@Component({
  selector: 'ng-config-driven-echarts-widget',
  templateUrl: './echarts-widget.component.html',
  styleUrls: ['./echarts-widget.component.scss'],
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class EchartsWidgetComponent implements OnInit {
  updateOptions: any;
  theme: string;
  data: any[];
  eChartsInstance: ECharts;
  @ViewChild('themeHelper') themeHelper: ElementRef;

  constructor(
    @Inject(Widget) public config: WidgetConfig,
    private dataQueriesService: DataQueriesService,
    public uiHelper: UIHelperService
  ) {}

  ngOnInit(): void {
    console.log(this.config);
    this.getData(this.config.queryUri);

    this.uiHelper.theme$
    .subscribe(theme => {
      this.theme = theme;

      if (this.themeHelper) {
        this.themeHelper.nativeElement.click();
      }
    });
  }

  getData(uri: string): void {
    this.dataQueriesService.exec(uri)
    .subscribe((data: any[]) => this.data = data);
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
