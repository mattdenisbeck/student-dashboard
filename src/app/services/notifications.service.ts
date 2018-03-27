import { Injectable } from '@angular/core';
import { NotificationPreference } from '../models/notification-preference';

@Injectable()
export class NotificationsService {
  private notificationPrefs: Map<string, boolean>;
  private notifications: NotificationPreference[];

  constructor() {
    this.notifications = [
      new NotificationPreference('Graduation Status Updated', true, 'school'),
      new NotificationPreference('New Grade Posted', true, 'assessment'),
      new NotificationPreference('Upcoming Class', true, 'event'),
      new NotificationPreference('Account Balance Due Updated', true, 'attach_money'),
      new NotificationPreference('Holds Updated', true, 'warning'),
      new NotificationPreference('Advisors Updated', true, 'assignment_ind'),
      new NotificationPreference('Registration Window Open', true, 'date_range'),
      new NotificationPreference('Add/Drop Schedule', true, 'swap_vert'),
    ];

  }

  getNotifications() {
    return this.notifications;
  }

}
