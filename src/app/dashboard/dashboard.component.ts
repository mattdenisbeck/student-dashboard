import { Component, OnInit, Inject, ViewContainerRef, ViewChild } from '@angular/core';
import { WidgetsService } from '../services/widgets.service';
import { DashboardWidget } from '../models/dashboard-widget';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  widgets: DashboardWidget[];
  @ViewChild('leftColumn', { read: ViewContainerRef }) leftViewContainerRef: ViewContainerRef;
  @ViewChild('rightColumn', { read: ViewContainerRef }) rightViewContainerRef: ViewContainerRef;

  constructor(private widgetsService: WidgetsService) {}

  ngOnInit() {
    this.widgets = this.widgetsService.getWidgets();
    for (const widget of this.widgets) {
      if (widget.column === 'left') {
        this.widgetsService.setRootViewContainerRef(this.leftViewContainerRef);
      } else {
        this.widgetsService.setRootViewContainerRef(this.rightViewContainerRef);
      }
      if (widget.show) {
        this.widgetsService.addDynamicWidget(widget.factory);
      }
    }

  }

}
