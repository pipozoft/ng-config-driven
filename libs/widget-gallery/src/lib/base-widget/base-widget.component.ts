import { Component, Inject, ChangeDetectorRef } from '@angular/core';
import { Widget, WidgetConfig, DataQueriesService } from '@ng-config-driven/ui-shared';
import { map } from 'rxjs/operators';

import * as _ from 'lodash';

@Component({
  selector: 'ng-config-driven-base-widget',
  template: ''
})
export class BaseWidgetComponent {
  data: any[];

  constructor(
    @Inject(Widget) public config: WidgetConfig,
    protected dataQueriesService: DataQueriesService,
    protected cd: ChangeDetectorRef
  ) {}
  
  getData(uri: string, func: Function): void {
    this.dataQueriesService.exec(uri)
    .pipe(
      map((reponse: any[]) => {
        // Save raw data
        this.data = Object.assign([], reponse);
        // Return transformed data
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
