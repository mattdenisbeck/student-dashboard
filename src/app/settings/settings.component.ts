import { Component, OnInit } from '@angular/core';
import { WidgetsService } from '../services/widgets.service';
import { NotificationsService } from '../services/notifications.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {
  widgets: {title: string, show: boolean, icon: string}[];
  notifications: {title: string, show: boolean, icon: string}[];
  profilePic: string;
  bannerPic: string;

  constructor(private widgetsService: WidgetsService, private notificationsService: NotificationsService) { }

  ngOnInit() {
    this.widgets = this.widgetsService.getWidgets();
    this.notifications = this.notificationsService.getNotifications();
    this.profilePic = null;
    this.bannerPic = null;
  }

  toggleWidget(widget: {title: string, show: boolean, icon: string}) {
    widget.show ? widget.show = false : widget.show = true;
    this.widgetsService.toggleWidget(widget.title);
  }

  toggleNotifications(notification: {title: string, show: boolean, icon: string}) {
    notification.show ? notification.show = false : notification.show = true;
    this.notificationsService.toggleNotification(notification.title);
  }

  onProfileFileInput(event) {
    this.profilePic = event.target.files[0].name;
  }
  onBannerFileInput(event) {
    this.bannerPic = event.target.files[0].name;
  }

  // TO DO: Write Functions to save Profile pics, Notification, and Dashboard Widgets

}
