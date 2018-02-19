import { Injectable } from '@angular/core';

@Injectable()
export class NotificationsService {
  private notificationPrefs: Map<string, boolean>;
  private notifications: {title: string, show: boolean, icon: string}[]; 

  constructor() {
    this.notifications = [
      {
        'title' : 'Graduation Status Updated',
        'show' : true,
        'icon' : 'school'
      },
      {
        'title' : 'New Grade Posted',
        'show' : true,
        'icon' : 'assessment'
      },
      {
        'title' : 'Upcoming Class',
        'show' : true,
        'icon' : 'event'
      }
    ];

    // build map of which widgets to show
    this.notificationPrefs = new Map<string, boolean>();
    this.notifications.forEach( notification => this.notificationPrefs.set(notification.title, notification.show));
  }

  getNotificationPrefs() {
    return this.notificationPrefs;
  }

  getNotifications() {
    return this.notifications;
  }

  toggleNotification(title: string) {
    this.notificationPrefs.get(title) ? this.notificationPrefs.set(title, false) : this.notificationPrefs.set(title, true);
  }
}
