import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BaseWidgetComponent } from './base-widget/base-widget.component';
import { WidgetGalleryModule } from '@ng-config-driven/widget-gallery';
import { UiSharedModule } from '@ng-config-driven/ui-shared';

@NgModule({
  imports: [
    CommonModule,
    WidgetGalleryModule,
    UiSharedModule,
    RouterModule.forChild([
      {path: ':id', pathMatch: 'full', component: DashboardComponent}
    ])
  ],
  declarations: [DashboardComponent, BaseWidgetComponent]
})
export class DashboardsModule {}
