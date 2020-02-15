import {
  Component,
  OnInit,
  AfterContentInit,
  ChangeDetectionStrategy,
  Renderer2
} from '@angular/core';
import { UIHelperService } from '@ng-config-driven/ui-shared';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Dashboard } from '@ng-config-driven/api-interfaces';
import { Observable } from 'rxjs';

@Component({
  selector: 'ng-config-driven-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DashboardComponent implements OnInit, AfterContentInit {
  config$: Observable<Dashboard>;

  constructor(
    private route: ActivatedRoute,
    private http: HttpClient
  ) {
    this.route.params.subscribe(params => {
      const uri = params['uri'];
      this.config$ = this.http.post<Dashboard>(`/api/dashboards/uri`, { uri });
    });
  }

  ngOnInit(): void {}

  ngAfterContentInit(): void {}
}
