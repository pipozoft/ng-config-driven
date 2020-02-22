import {
  Component,
  ChangeDetectionStrategy,
  OnDestroy
} from '@angular/core';
import { UIHelperService } from '@ng-config-driven/ui-shared';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Dashboard } from '@ng-config-driven/api-interfaces';
import { Observable, Subscription } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';
import { SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'ng-config-driven-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DashboardComponent implements OnDestroy {
  config$: Observable<Dashboard>;
  themeStyles: SafeHtml;
  sub: Subscription;

  constructor(
    private route: ActivatedRoute, private http: HttpClient, private uiHelper: UIHelperService
  ) {
    this.sub = this.route.params
    .subscribe(params => {
      const uri = params['uri'];
      this.config$ = this.http.post<Dashboard>(`/api/dashboards/uri`, { uri })
      .pipe(
        tap(config => {
          this.themeStyles = this.uiHelper.getThemeStyle(config.theme || {});
          this.uiHelper.applyTheme()
        }),
        catchError(err => {
          throw err;
        }),
      );
    });
  }

  ngOnDestroy(): void {
    this.uiHelper.clearTheme();
    if (this.sub) {
      this.sub.unsubscribe();
    }
  }
}
