import { Injectable } from '@angular/core';

@Injectable()
export class Widget {
    transformationFunction: string;
    queryUri: string;
    chartOptions: any;
    value: any;

    constructor({queryUri, transformationFunction, chartOptions, value}) {
        this.queryUri = queryUri || '';
        this.transformationFunction = transformationFunction || null;
        this.chartOptions = chartOptions || null;
        this.value = value || null;
    }
}
