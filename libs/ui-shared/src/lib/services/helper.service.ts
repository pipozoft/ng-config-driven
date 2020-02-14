import { Injectable, Renderer2, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';

const darkModeClass = 'dark-mode';

@Injectable({
    providedIn: 'any'
})
export class UIHelperService {
    theme = 'dark';
    renderer: Renderer2;

    constructor(@Inject(DOCUMENT) private document: Document) {}

    toggleDarkMode() {
        this.theme = this.theme === 'dark' ? 'light' : 'dark';
        this.document.body.classList.toggle(darkModeClass);
    }
}