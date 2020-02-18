import {
  Component,
  OnInit,
  AfterContentInit,
  ChangeDetectionStrategy,
  Renderer2,
  OnDestroy
} from '@angular/core';
import { UIHelperService } from '@ng-config-driven/ui-shared';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Dashboard } from '@ng-config-driven/api-interfaces';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'ng-config-driven-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DashboardComponent implements OnInit, AfterContentInit, OnDestroy {
  config$: Observable<Dashboard>;
  themeStyles: SafeHtml;

  constructor(
    private route: ActivatedRoute,
    private http: HttpClient,
    private uiHelper: UIHelperService
  ) {
    this.route.params
    .subscribe(params => {
      const uri = params['uri'];
      this.config$ = this.http.post<Dashboard>(`/api/dashboards/uri`, { uri })
      .pipe(
        tap(config => {
          this.themeStyles = this.uiHelper.getThemeStyle(config.theme || {});
          this.uiHelper.applyTheme()
        })
      );
    });

  }

  ngOnInit(): void {}

  ngAfterContentInit(): void {}

  ngOnDestroy(): void {
    this.uiHelper.clearTheme();
  }
}
