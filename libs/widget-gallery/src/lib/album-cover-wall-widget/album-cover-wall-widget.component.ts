import { Component, Inject, AfterViewInit, ChangeDetectorRef } from '@angular/core';
import { RegisterWidget, Widget, WidgetConfig, DataQueriesService } from '@ng-config-driven/ui-shared';
import { BaseWidgetComponent } from '../base-widget/base-widget.component';

@RegisterWidget('AlbumCoverWallWidget')
@Component({
  selector: 'ng-config-driven-album-cover-wall-widget',
  templateUrl: './album-cover-wall-widget.component.html',
  styleUrls: ['./album-cover-wall-widget.component.scss']
})
export class AlbumCoverWallWidgetComponent extends BaseWidgetComponent implements AfterViewInit {

  constructor(
    @Inject(Widget) public config: WidgetConfig,
    protected dataQueriesService: DataQueriesService,
    protected cd: ChangeDetectorRef
  ) {
    super(config, dataQueriesService, cd);
  }

  ngAfterViewInit(): void {
    this.getData(this.config.queryUri, () => {});
  }
}
