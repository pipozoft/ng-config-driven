import { Component, Inject, ChangeDetectorRef } from '@angular/core';
import { DataQueriesService, WidgetConfiguration } from '@ng-config-driven/ui-shared';
import { map } from 'rxjs/operators';

import * as _ from 'lodash';

@Component({
  template: ''
})
export class BaseWidgetComponent {
  data: any[];

  constructor(
    @Inject(WidgetConfiguration) public config: WidgetConfiguration,
    protected dataQueriesService: DataQueriesService,
    protected cd: ChangeDetectorRef
  ) {}
  
  getData(uri: string, func: Function): void {
    this.dataQueriesService.exec(uri)
    .pipe(
      map((reponse: any[]) => {
        // Save raw data
        this.data = Object.assign([], reponse);
        // Return data transformed by the widget's transformation function
        return this.dataQueriesService.createTransformationFunction(
          this.config.transformationFunction
        )(reponse, {_});
      })
    )
    .subscribe(data => {
      func(data);
      this.cd.detectChanges();
    });
  }
}
