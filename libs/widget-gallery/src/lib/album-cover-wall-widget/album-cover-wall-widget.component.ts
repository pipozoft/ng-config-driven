import { Component, Inject, AfterViewInit, ChangeDetectorRef } from '@angular/core';
import { RegisterWidget, WidgetConfiguration, DataQueriesService, WidgetCommunicationService } from '@ng-config-driven/ui-shared';
import { BaseWidgetComponent } from '../base-widget/base-widget.component';

@RegisterWidget('AlbumCoverWallWidget')
@Component({
  selector: 'ng-config-driven-album-cover-wall-widget',
  templateUrl: './album-cover-wall-widget.component.html',
  styleUrls: ['./album-cover-wall-widget.component.scss']
})
export class AlbumCoverWallWidgetComponent extends BaseWidgetComponent implements AfterViewInit {

  constructor(
    @Inject(WidgetConfiguration) public config: WidgetConfiguration,
    protected dataQueriesService: DataQueriesService,
    protected cd: ChangeDetectorRef,
    private widgetCommunicationService: WidgetCommunicationService
  ) {
    super(config, dataQueriesService, cd);
  }

  ngAfterViewInit(): void {
    this.getData(this.config.queryUri, () => {});
  }

  chartAction(type: string, artist) {
    // by name
    this.widgetCommunicationService.send({
      type,
      name: artist.name
    });

    // by country
    this.widgetCommunicationService.send({
      type,
      name: artist.country
    });
  }
}
