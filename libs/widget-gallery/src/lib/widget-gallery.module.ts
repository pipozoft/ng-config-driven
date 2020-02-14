import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EchartsWidgetComponent } from './echarts-widget/echarts-widget.component';
import { NgxEchartsModule } from 'ngx-echarts';

@NgModule({
  imports: [
    CommonModule,
    NgxEchartsModule
  ],
  declarations: [EchartsWidgetComponent]
})
export class WidgetGalleryModule {}
