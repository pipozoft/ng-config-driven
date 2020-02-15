import { Injectable, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { BehaviorSubject } from 'rxjs';

const DARK_THEME_CLASS = 'dark-theme';

@Injectable({
    providedIn: 'root'
})
export class UIHelperService {
    theme$ = new BehaviorSubject<string>('default');

    constructor(@Inject(DOCUMENT) private document: Document) {}

    toggleDarkMode() {
        this.theme$.getValue() === 'dark' ? this.theme$.next('default') : this.theme$.next('dark');
        this.document.body.classList.toggle(DARK_THEME_CLASS);
    }
}
