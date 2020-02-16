import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EchartsWidgetComponent } from './echarts-widget/echarts-widget.component';
import { NgxEchartsModule } from 'ngx-echarts';
import { UiSharedModule } from '@ng-config-driven/ui-shared';
import { AlbumCoverWallWidgetComponent } from './album-cover-wall-widget/album-cover-wall-widget.component';

@NgModule({
  imports: [
    CommonModule,
    NgxEchartsModule,
    UiSharedModule
  ],
  declarations: [EchartsWidgetComponent, AlbumCoverWallWidgetComponent]
})
export class WidgetGalleryModule {}
