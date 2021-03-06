import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { WidgetWrapperComponent } from './widget-wrapper/widget-wrapper.component';
import { WidgetGalleryModule } from '@ng-config-driven/widget-gallery';
import { UiSharedModule } from '@ng-config-driven/ui-shared';
import { ListComponent } from './list/list.component';

@NgModule({
  imports: [
    CommonModule,
    WidgetGalleryModule,
    UiSharedModule,
    RouterModule.forChild([
      {path: '', pathMatch: 'full', component: ListComponent},
      {path: ':uri', pathMatch: 'full', component: DashboardComponent}
    ])
  ],
  declarations: [DashboardComponent, WidgetWrapperComponent, ListComponent]
})
export class DashboardsModule {}
