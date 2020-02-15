import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UIHelperService } from './services/helper.service'
import { DataQueriesService } from './services/data-queries.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule
  ]
})
export class UiSharedModule  {
  static forRoot(): ModuleWithProviders<UiSharedModule> {
    return {
      ngModule: UiSharedModule,
      providers: [
        DataQueriesService,
        UIHelperService
      ]
    };
  }
}
