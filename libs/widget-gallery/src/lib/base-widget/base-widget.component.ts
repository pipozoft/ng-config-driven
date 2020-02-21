import { Component, Inject, ChangeDetectorRef, OnDestroy } from '@angular/core';
import { DataQueriesService, WidgetConfiguration } from '@ng-config-driven/ui-shared';
import { map } from 'rxjs/operators';
import { Subscription } from 'rxjs';

@Component({
  template: ''
})
export class BaseWidgetComponent implements OnDestroy {
  subs: Array<Subscription> = [];
  data: any[];

  constructor(
    @Inject(WidgetConfiguration) public config: WidgetConfiguration,
    protected dataQueriesService: DataQueriesService,
    protected cd: ChangeDetectorRef
  ) {}
  
  getData(uri: string, func: Function): void {
    this.subs.push(
      this.dataQueriesService.exec(uri)
      .pipe(
        map((reponse: any[]) => {
          // Save raw data
          this.data = Object.assign([], reponse);
          // Return data transformed by the widget's transformation function
          return this.dataQueriesService.createTransformationFunction(
            this.config.transformationFunction
          )(reponse);
        })
      )
      .subscribe(data => {
        func(data);
        this.cd.detectChanges();
      })
    );
  }

  ngOnDestroy(): void {
    this.subs.forEach(sub => sub.unsubscribe());
  }
}
