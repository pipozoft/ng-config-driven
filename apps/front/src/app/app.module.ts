import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';

import { RouterModule, PreloadAllModules } from '@angular/router';


@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
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
