import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgxEchartsModule } from 'ngx-echarts';
import { UiSharedModule } from '@ng-config-driven/ui-shared';

import { BaseWidgetComponent } from './base-widget/base-widget.component';
import { EchartsWidgetComponent } from './echarts-widget/echarts-widget.component';
import { AlbumCoverWallWidgetComponent } from './album-cover-wall-widget/album-cover-wall-widget.component';

import * as echarts from 'echarts';

@NgModule({
  imports: [
    CommonModule,
    NgxEchartsModule.forRoot({
      echarts,
    }),
    UiSharedModule
  ],
  declarations: [BaseWidgetComponent, EchartsWidgetComponent, AlbumCoverWallWidgetComponent]
})
export class WidgetGalleryModule {}
