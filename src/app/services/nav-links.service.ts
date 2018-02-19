import { Injectable } from '@angular/core';
import { NavLinkModel } from '../models/nav-link-model';

@Injectable()
export class NavLinksService {
  navlinks: NavLinkModel[] = [
    {
      'title': 'Dashboard',
      'description': 'The description of the dashboard, includes Holds, Vital Stats, and Norse Feed',
      'path' : '',
      'icon' : 'home',
      'leftNav' : true,
      'weight' : 1,
      'external' : false
    },
    {
      'title': 'Class Schedule',
      'description': 'The description of the Class Schedule',
      'path' : '/schedule',
      'icon' : 'event',
      'leftNav' : true,
      'weight' : 2,
      'external' : false
    },
    {
      'title': 'Grades',
      'description': 'The description of the Grades',
      'path' : '/grades',
      'icon' : 'assessment',
      'leftNav' : true,
      'weight' : 3,
      'external' : false
    },
    {
      'title': 'Academic Plan',
      'description': 'The description of the Academic Plan',
      'path' : '/academic-plan',
      'icon' : 'border_color',
      'leftNav' : true,
      'weight' : 4,
      'external' : false
    },
    {
      'title': 'Degree Audit',
      'description': 'The description of the Degree Audit',
      'path' : '/degree-audit',
      'icon' : 'assignment_turned_in',
      'leftNav' : true,
      'weight' : 5,
      'external' : false
    },
    {
      'title': 'Registration',
      'description': 'The description of the Registration',
      'path' : '/registration',
      'icon' : 'date_range',
      'leftNav' : true,
      'weight' : 6,
      'external' : false
    },
    {
      'title': 'Advisors',
      'description': 'The description of the Advisors',
      'path' : '/advisors',
      'icon' : 'assignment_ind',
      'leftNav' : true,
      'weight' : 7,
      'external' : false
    },
    {
      'title': 'Account',
      'description': 'The description of the Account',
      'path' : '/account',
      'icon' : 'local_atm',
      'leftNav' : true,
      'weight' : 8,
      'external' : false
    },
    {
      'title': 'Canvas',
      'description': 'The description of the Canvas',
      'path' : 'https://learnonline.nku.edu/',
      'icon' : 'school',
      'leftNav' : true,
      'weight' : 20,
      'external' : true
    },
    {
      'title': 'Order Books',
      'description': 'The description of the Order Books',
      'path' : 'https://mynku.nku.edu/irj/servlet/prt/portal/prtroot/pcd!3aportal_content!2fNKUContent!2fcom.nku.folder.roles!2fcom.nku.pct.role.st_services!2fcom.nku.pct.workset.st_academics!2fcom.nku.pct.cm.iview.book_now',
      'icon' : 'import_contacts',
      'leftNav' : true,
      'weight' : 28,
      'external' : true
    },
    {
      'title': 'Apply for Graduation',
      'description': 'The description of the Apply for Graduation',
      'path' : 'https://mynku.nku.edu/irj/servlet/prt/portal/prtroot/pcd!3aportal_content!2fNKUContent!2fcom.nku.folder.roles!2fcom.nku.pct.role.st_services!2fcom.nku.pct.workset.st_academics!2fcom.nku.pct.cm.page.apply_graduation!2fcom.nku.pct.cm.iView.apply_graduation',
      'icon' : 'school',
      'leftNav' : true,
      'weight' : 29,
      'external' : true
    },
    {
      'title': 'Program Change',
      'description': 'The description of the Program Change',
      'path' : 'https://mynku.nku.edu/irj/servlet/prt/portal/prtmode/preview/prtroot/pcd!3aportal_content!2fNKUContent!2fcom.nku.folder.iviews!2fcom.nku.pct.folder.st_services!2fcom.nku.pct.folder.program_change!2fcom.nku.pct.iview.change_program_0',
      'icon' : 'swap_horiz',
      'leftNav' : true,
      'weight' : 29,
      'external' : true
    },
    {
      'title': 'Parking Services',
      'description': 'The description of the Parking Services',
      'path' : 'https://inside.nku.edu/parking.html',
      'icon' : 'local_parking',
      'leftNav' : true,
      'weight' : 30,
      'external' : true
    },
    {
      'title': 'Profile',
      'description': 'The description of the Profile',
      'path' : '/profile',
      'icon' : 'account_circle',
      'leftNav' : false,
      'weight' : 99,
      'external' : false
    },
    {
      'title': 'Search',
      'description': 'The description of the Search',
      'path' : '/search',
      'icon' : 'search',
      'leftNav' : false,
      'weight' : 99,
      'external' : false
    },
    {
      'title': 'Settings',
      'description': 'The description of the Settings',
      'path' : '/settings',
      'icon' : 'settings',
      'leftNav' : false,
      'weight' : 99,
      'external' : false
    },
    {
      'title': 'Logout',
      'description': 'The description of the Logout',
      'path' : '/logout',
      'icon' : 'power_settings_new',
      'leftNav' : false,
      'weight' : 99,
      'external' : false
    }
  ];

  constructor() { }

  getNavLinks() {
    this.navlinks.sort((link1, link2) => link1.weight - link2.weight);
    return this.navlinks;
  }

  getNavLinkTitle( path: string ) {
    if ( path.indexOf('?q=') > -1) {
      path = path.split('?')[0];
    }
    const currentLink = this.navlinks.find(link => link.path === path);

    return currentLink ? currentLink.title : 'Page Not Found';
  }
}
