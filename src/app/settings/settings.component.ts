import { Component, OnInit } from '@angular/core';
import { WidgetsService } from '../services/widgets.service';
import { NotificationsService } from '../services/notifications.service';
import { DashboardWidget } from '../models/dashboard-widget';
import { NotificationPreference } from '../models/notification-preference';
import { ProfileBannerService, BannerImage } from '../services/profile-banner.service';

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
  banners: BannerImage[];

  constructor(private widgetsService: WidgetsService, private notificationsService: NotificationsService,
    private bannerService: ProfileBannerService) { }

  ngOnInit() {
    this.widgets = this.widgetsService.getWidgets();
    this.orderValues = [];
    for ( let i = 1; i <= this.widgets.length; i++) {
      this.orderValues.push(i);
    }
    this.notifications = this.notificationsService.getNotifications();
    this.banners = this.bannerService.getBanners();
  }

  toggleWidget(widget: DashboardWidget) {
    widget.show ? widget.show = false : widget.show = true;
  }

  toggleNotifications(notification: NotificationPreference) {
    notification.show ? notification.show = false : notification.show = true;
  }

  onBannerImgChange(title: string) {
    this.bannerService.setActiveBanner(title);
  }

  // TO DO: Write Functions to save Profile pics, Notification, and Dashboard Widgets

}
