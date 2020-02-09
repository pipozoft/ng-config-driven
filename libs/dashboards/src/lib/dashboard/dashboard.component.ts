import {
  Component,
  OnInit,
  AfterContentInit,
  ChangeDetectionStrategy,
  Renderer2
} from '@angular/core';
import { UIHelperService } from '@ng-config-driven/ui-shared';

@Component({
  selector: 'ng-config-driven-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DashboardComponent implements OnInit, AfterContentInit {
  config$ = {
    title: 'Dashboard Sample',
    widgets: [{
      id: 1,
      title: 'Widget 1',
      data: {
        chartOptions: {},
        value: {}
      }
    },
    {
      id: 2,
      title: 'Widget 2',
      data: {
        chartOptions: {},
        value: {}
      }
    }]
  }
  constructor(public uiHelper: UIHelperService, private renderer: Renderer2) {
    uiHelper.renderer = renderer;
  }

  ngOnInit(): void {}

  ngAfterContentInit() {
  }
}
