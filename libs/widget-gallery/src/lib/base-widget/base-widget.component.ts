import { Component, Inject, ChangeDetectorRef, OnDestroy, Injector } from '@angular/core';
import { DataQueriesService, WidgetConfiguration, WidgetCommunicationService } from '@ng-config-driven/ui-shared';
import { map } from 'rxjs/operators';
import { Subscription } from 'rxjs';

@Component({
  template: ''
})
export class BaseWidgetComponent implements OnDestroy {
  protected dataQueriesService: DataQueriesService;
  protected cd: ChangeDetectorRef;
  protected widgetCommunicationService: WidgetCommunicationService;

  subs: Array<Subscription> = [];
  data: any[];

  constructor(
    @Inject(WidgetConfiguration) public config: WidgetConfiguration,
    injector: Injector
  ) {
    this.dataQueriesService = injector.get(DataQueriesService);
    this.cd = injector.get(ChangeDetectorRef);
    this.widgetCommunicationService = injector.get(WidgetCommunicationService);
  }
  
  getData(uri: string, func: Function): void {
    this.subs.push(
      // Execute data query
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
      },
      error => console.log(error))
    );
  }

  ngOnDestroy(): void {
    this.subs.forEach(sub => sub.unsubscribe());
  }
}
