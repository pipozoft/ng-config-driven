import { Component, OnInit, Inject, AfterViewInit, ChangeDetectorRef } from '@angular/core';
import { RegisterWidget, Widget, WidgetConfig, DataQueriesService } from '@ng-config-driven/ui-shared';

@RegisterWidget('AlbumCoverWallWidget')
@Component({
  selector: 'ng-config-driven-album-cover-wall-widget',
  templateUrl: './album-cover-wall-widget.component.html',
  styleUrls: ['./album-cover-wall-widget.component.scss']
})
export class AlbumCoverWallWidgetComponent implements OnInit, AfterViewInit {
  data: any[];

  constructor(
    @Inject(Widget) public config: WidgetConfig,
    private dataQueriesService: DataQueriesService,
    private cd: ChangeDetectorRef
  ) {
    
  }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.getData(this.config.queryUri);
  }

  getData(uri: string): void {
    this.dataQueriesService.exec(uri)
    .subscribe(reponse => {
      // Save raw data
      this.data = Object.assign([], reponse);
      this.cd.detectChanges();
    });
  }
}
