import { Injectable } from '@angular/core';

@Injectable()
export class Widget {
    queryUri: string;
    chartOptions: any;
    value: any;

    constructor({queryUri, chartOptions, value}) {
        this.queryUri = queryUri || '';
        this.chartOptions = chartOptions || null;
        this.value = value || null;
    }
}
