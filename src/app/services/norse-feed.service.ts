import { Injectable } from '@angular/core';
import { NorseFeedItem } from '../models/norse-feed-item';

@Injectable()
export class NorseFeedService {
  feedItems: NorseFeedItem[] = [
    {
      'msg': 'New grade added for CSC 360',
      'feature': 'Grades',
      'path' : '../grades',
      'icon' : 'assessment',
      'iconColor' : 'text-warning',
      'timestamp' : new Date ('2018-01-11T16:00:00')
    },
    {
      'msg': 'Hold added to your account!',
      'feature': 'Holds',
      'path' : '',
      'icon' : 'warning',
      'iconColor' : 'text-danger',
      'timestamp' : new Date ('2018-01-12T16:00:00')
    },
    {
      'msg': 'New grade added for CSC 240',
      'feature': 'Grades',
      'path' : '../grades',
      'icon' : 'assessment',
      'iconColor' : 'text-warning',
      'timestamp' : new Date ('2018-01-10T16:00:00')
    },
    {
      'msg': 'Registration window now open!',
      'feature': 'Registration',
      'path' : '../registration',
      'icon' : 'date_range',
      'iconColor' : 'text-success',
      'timestamp' : new Date ('2018-01-09T16:00:00')
    },
    {
      'msg': 'Overall GPA just increased to 3.37!',
      'feature': 'Grades',
      'path' : '../grades',
      'icon' : 'track_changes',
      'iconColor' : 'text-success',
      'timestamp' : new Date ('2018-01-21T16:00:00')
    },
    {
      'msg': 'Tuition bill is due this week',
      'feature': 'Account',
      'path' : '../account',
      'icon' : 'local_atm',
      'iconColor' : 'text-danger',
      'timestamp' : new Date ('2018-01-19T16:00:00')
    },
    {
      'msg': 'Advisor information updated',
      'feature': 'Advisors',
      'path' : '../advisors',
      'icon' : 'assignment_ind',
      'iconColor' : 'text-warning',
      'timestamp' : new Date ('2018-01-16T16:00:00')
    }
  ];

  constructor() { }

  getFeedItems() {
    this.feedItems.sort((item1, item2) => {
      if (item1.timestamp < item2.timestamp) {
        return -1;
      } else {
        return 1;
      }
    });
    return this.feedItems;
  }
}
