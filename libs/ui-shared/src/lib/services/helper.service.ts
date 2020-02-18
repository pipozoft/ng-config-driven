import { Injectable, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { BehaviorSubject } from 'rxjs';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

const DARK_THEME_CLASS = 'dark-theme';

@Injectable({
    providedIn: 'root'
})
export class UIHelperService {
    theme$ = new BehaviorSubject<string>('default');

    constructor(
        @Inject(DOCUMENT) private document: Document,
        private domSanitizer: DomSanitizer
    ) {}

    toggleDarkMode(): void {
        this.theme$.getValue() === 'dark' ? this.theme$.next('default') : this.theme$.next('dark');
        this.document.body.classList.toggle(DARK_THEME_CLASS);
    }

    getThemeStyle(theme): SafeHtml {
        let cssProps = '';
        for (const key of Object.keys(theme)) {
            cssProps += `--${key}:${theme[key]};\n`;
        }

        const style = `
        <style>
            .override {
            ${cssProps}
            }
        </style>`;
        return this.domSanitizer.bypassSecurityTrustHtml(style);
    }

    applyTheme(): void {
        this.document.body.classList.add('override');
    }
    
    clearTheme(): void {
        this.document.body.classList.remove('override');
    }
    
}
