import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UIHelperService } from './services/helper.service'

@NgModule({
  imports: [
    CommonModule
  ]
})
export class UiSharedModule  {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: UiSharedModule,
      providers: [
        UIHelperService
      ]
    };
  }
}
