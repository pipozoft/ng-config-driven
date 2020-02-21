import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ChartAction } from '../interfaces';

@Injectable({
    providedIn: 'root'
})
export class WidgetCommunicationService {
    events$ = new BehaviorSubject<ChartAction>({
        type: '',
        name: ''
    });

    constructor() {}

    send(action: ChartAction) {
        this.events$.next(action);
    }
}
