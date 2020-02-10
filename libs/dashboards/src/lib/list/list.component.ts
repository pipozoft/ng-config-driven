import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Dashboard } from '@ng-config-driven/api-interfaces';

@Component({
  selector: 'ng-config-driven-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ListComponent implements OnInit {
  dashboards$ = this.http.get<Dashboard[]>('/api/dashboards');
  constructor(private http: HttpClient) {}

  ngOnInit(): void {
  }

}
