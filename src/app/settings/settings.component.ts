import { Component, OnInit } from '@angular/core';
import { WidgetsService } from '../services/widgets.service';
import { NotificationsService } from '../services/notifications.service';
import { DashboardWidget } from '../models/dashboard-widget';
import { NotificationPreference } from '../models/notification-preference';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {
  widgets: DashboardWidget[];
  orderValues: number[];
  notifications: NotificationPreference[];
  profilePic: string;
  bannerPic: string;

  constructor(private widgetsService: WidgetsService, private notificationsService: NotificationsService) { }

  ngOnInit() {
    this.widgets = this.widgetsService.getWidgets();
    this.orderValues = [];
    for ( let i = 1; i <= this.widgets.length; i++) {
      this.orderValues.push(i);
    }
    this.notifications = this.notificationsService.getNotifications();
    this.profilePic = null;
    this.bannerPic = null;
  }

  toggleWidget(widget: DashboardWidget) {
    widget.show ? widget.show = false : widget.show = true;
  }

  toggleNotifications(notification: NotificationPreference) {
    notification.show ? notification.show = false : notification.show = true;
  }

  onProfileFileInput(event) {
    this.profilePic = event.target.files[0].name;
  }
  onBannerFileInput(event) {
    this.bannerPic = event.target.files[0].name;
  }

  // TO DO: Write Functions to save Profile pics, Notification, and Dashboard Widgets

}
