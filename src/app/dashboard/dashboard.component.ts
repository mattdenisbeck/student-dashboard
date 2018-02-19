import { Component, OnInit } from '@angular/core';
import { WidgetsService } from '../services/widgets.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  showWidget: Map<string, boolean>;

  constructor(private widgetsService: WidgetsService) { }

  ngOnInit() {
    this.showWidget = this.widgetsService.getShowWidgets();
  }

}
