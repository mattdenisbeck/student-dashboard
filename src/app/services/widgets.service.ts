import { Injectable } from '@angular/core';

@Injectable()
export class WidgetsService {
  private showWidgets: Map<string, boolean>;
  private widgets: {title: string, show: boolean, icon: string}[];

  constructor() {
    this.widgets = [
      {
        'title': 'Vital Stats',
        'show': true,
        'icon': 'show_chart'
      },
      {
        'title': 'Norse Feed',
        'show': true,
        'icon': 'notifications_active'
      },
      {
        'title': 'Upcoming Classes',
        'show': true,
        'icon': 'event'
      }
    ];

    // build map of which widgets to show
    this.showWidgets = new Map<string, boolean>();
    this.widgets.forEach( widget => this.showWidgets.set(widget.title, widget.show));
  }

  getShowWidgets() {
    return this.showWidgets;
  }

  getWidgets() {
    return this.widgets;
  }

  toggleWidget(title: string) {
    this.showWidgets.get(title) ? this.showWidgets.set(title, false) : this.showWidgets.set(title, true);
  }

}
