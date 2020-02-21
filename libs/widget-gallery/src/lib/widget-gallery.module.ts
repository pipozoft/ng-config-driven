import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgxEchartsModule } from 'ngx-echarts';
import { UiSharedModule } from '@ng-config-driven/ui-shared';

import { BaseWidgetComponent } from './base-widget/base-widget.component';
import { EchartsWidgetComponent } from './echarts-widget/echarts-widget.component';
import { AlbumCoverWallWidgetComponent } from './album-cover-wall-widget/album-cover-wall-widget.component';

@NgModule({
  imports: [
    CommonModule,
    NgxEchartsModule,
    UiSharedModule
  ],
  declarations: [BaseWidgetComponent, EchartsWidgetComponent, AlbumCoverWallWidgetComponent]
})
export class WidgetGalleryModule {}