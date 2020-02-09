import { Component, OnInit, Inject, ChangeDetectionStrategy } from '@angular/core';
import { Widget, WidgetConfig, RegisterWidget } from '@ng-config-driven/ui-shared';

@RegisterWidget('EchartsWidget')
@Component({
  selector: 'ng-config-driven-echarts-widget',
  templateUrl: './echarts-widget.component.html',
  styleUrls: ['./echarts-widget.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EchartsWidgetComponent implements OnInit {

  constructor(@Inject(Widget) public config: WidgetConfig) { }

  ngOnInit(): void {
    console.log(this.config)
  }
}
