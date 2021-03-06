import { Component, Renderer2 } from '@angular/core';
import { UIHelperService } from '@ng-config-driven/ui-shared';

@Component({
  selector: 'ng-config-driven-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(public uiHelper: UIHelperService) {

    // Check if browser preference is dark
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      this.uiHelper.toggleDarkMode();
    }
  }

  toggleTheme(): void {
    this.uiHelper.toggleDarkMode();
  }
}
