import { Component, OnInit, Inject, ChangeDetectionStrategy } from '@angular/core';
import { Widget, WidgetConfig, RegisterWidget, DataQueriesService } from '@ng-config-driven/ui-shared';

@RegisterWidget('EchartsWidget')
@Component({
  selector: 'ng-config-driven-echarts-widget',
  templateUrl: './echarts-widget.component.html',
  styleUrls: ['./echarts-widget.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EchartsWidgetComponent implements OnInit {
  updateOptions: any;
  theme = 'dark'; //TODO: make dynamic
  data: any; //TODO: type

  constructor(
    @Inject(Widget) public config: WidgetConfig,
    private dataQueriesService: DataQueriesService
  ) {
  }

  ngOnInit(): void {
    console.log(this.config);
    this.getData(this.config.queryUri);
  }

  getData(uri: string): void {
    this.dataQueriesService.exec(uri)
    .subscribe(data => this.data = data);
  }

  onChartEvent(event) {
    console.log(event);
  }
}
