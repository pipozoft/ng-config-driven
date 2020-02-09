import { Injectable } from '@angular/core';
import { WidgetConfig } from './interfaces';

@Injectable()
export class Widget {
    chartOptions: any;
    value: any;

    constructor({chartOptions, value}) {
        this.chartOptions = chartOptions;
        this.value = value;
    }
}
