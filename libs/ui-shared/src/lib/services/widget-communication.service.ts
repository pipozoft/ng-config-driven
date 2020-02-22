import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { ChartAction } from '../interfaces';

@Injectable({
    providedIn: 'root'
})
export class WidgetCommunicationService {
    events$ = new Subject<ChartAction>();

    constructor() {}

    send(action: ChartAction) {
        this.events$.next(action);
    }
}
