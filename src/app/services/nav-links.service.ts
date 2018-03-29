import { Injectable } from '@angular/core';
import { NavLinkModel } from '../models/nav-link-model';

@Injectable()
export class NavLinksService {

  navlinks: NavLinkModel[] = [
    new NavLinkModel('Dashboard', 'The description of the dashboard, includes Holds, Vital Stats, and Norse Feed', '',
      'dashboard', true, 1, false),
    new NavLinkModel('Class Schedule', 'The description of the Class Schedule', '/schedule', 'event', true, 2, false),
    new NavLinkModel('Grades', 'The description of the Grades', '/grades', 'assessment', true, 3, false),
    new NavLinkModel('Academic Plan', 'The description of the Academic Plan', '/academic-plan', 'border_color', true, 4, false),
    new NavLinkModel('Degree Audit', 'The description of the Degree Audit', '/degree-audit', 'assignment_turned_in', true, 5, false),
    new NavLinkModel('Registration', 'The description of the Registration', '/registration', 'date_range', true, 6, false),
    new NavLinkModel('Advisors', 'The description of the Advisors', '/advisors', 'assignment_ind', true, 7, false),
    new NavLinkModel('Account', 'The description of the Account', '/account', 'local_atm', true, 8, false),
    new NavLinkModel('Canvas', 'The description of the Canvas', 'https://learnonline.nku.edu/', 'school', true, 20, true),
    // tslint:disable-next-line:max-line-length
    new NavLinkModel('Order Books', 'The description of the Order Books', 'https://mynku.nku.edu/irj/servlet/prt/portal/prtroot/pcd!3aportal_content!2fNKUContent!2fcom.nku.folder.roles!2fcom.nku.pct.role.st_services!2fcom.nku.pct.workset.st_academics!2fcom.nku.pct.cm.iview.book_now', 'import_contacts', true, 28, true),
    // tslint:disable-next-line:max-line-length
    new NavLinkModel('Apply for Graduation', 'The description of the Apply for Graduation', 'https://mynku.nku.edu/irj/servlet/prt/portal/prtroot/pcd!3aportal_content!2fNKUContent!2fcom.nku.folder.roles!2fcom.nku.pct.role.st_services!2fcom.nku.pct.workset.st_academics!2fcom.nku.pct.cm.page.apply_graduation!2fcom.nku.pct.cm.iView.apply_graduation', 'school', true, 29, true),
    // tslint:disable-next-line:max-line-length
    new NavLinkModel('Program Change', 'The description of the Program Change', 'https://mynku.nku.edu/irj/servlet/prt/portal/prtmode/preview/prtroot/pcd!3aportal_content!2fNKUContent!2fcom.nku.folder.iviews!2fcom.nku.pct.folder.st_services!2fcom.nku.pct.folder.program_change!2fcom.nku.pct.iview.change_program_0', 'swap_horiz', true, 30, true),
    // tslint:disable-next-line:max-line-length
    new NavLinkModel('Parking Services', 'The description of the Parking Services', 'https://inside.nku.edu/parking.html', 'local_parking', true, 31, true),
    new NavLinkModel('Profile', 'The description of the Profile', '/profile', 'account_circle', false, 99, false),
    new NavLinkModel('Search', 'The description of the Search', '/search', 'search', false, 99, false),
    new NavLinkModel('Settings', 'The description of the Settings', '/settings', 'settings', false, 99, false),
    new NavLinkModel('Logout', 'The description of the Logout', '/logout', 'power_settings_new', false, 99, false),
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
