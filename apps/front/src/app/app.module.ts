import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';

import { RouterModule, PreloadAllModules } from '@angular/router';
import { UiSharedModule, UIHelperService } from '@ng-config-driven/ui-shared';


@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    UiSharedModule.forRoot(),
    RouterModule.forRoot([
      {
        path: 'dashboards',
        loadChildren: () => import('@ng-config-driven/dashboards').then(m => m.DashboardsModule)
      }
    ], {
      // enableTracing: true,
      initialNavigation: 'enabled',
      useHash: true,
      preloadingStrategy: PreloadAllModules
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
