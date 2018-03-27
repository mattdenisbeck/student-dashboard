import { AfterViewInit, Component, OnInit, ViewChild, ChangeDetectorRef } from '@angular/core';
import { MatSidenav } from '@angular/material';
import { NavLinksService } from './services/nav-links.service';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { NavLinkModel } from './models/nav-link-model';
import { MediaMatcher } from '@angular/cdk/layout';
import { ShowProfileAvatarService } from './services/show-profile-avatar.service';
import { OnDestroy } from '@angular/core/src/metadata/lifecycle_hooks';
import { SearchService } from './services/search.service';
import { Student } from './models/student';
import { StudentInfoService } from './services/student-info.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnDestroy, OnInit {
  @ViewChild('sidenav') sidenav: MatSidenav;
  menuIcon = 'close';
  navLinks: NavLinkModel[];
  route: string;
  opened = true;
  mobileQuery: MediaQueryList;
  showProfileAvatar: boolean;
  student: Student;

  private _mobileQueryListener: () => void;

  constructor( private navLinksService: NavLinksService, private location: Location, private router: Router,
    changeDetectorRef: ChangeDetectorRef, media: MediaMatcher, private showAvatarService: ShowProfileAvatarService,
    private searchService: SearchService, private studentInfoService: StudentInfoService ) {
    this.mobileQuery = media.matchMedia('(max-width: 767px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }

  ngOnInit() {
    if (this.mobileQuery.matches) {
      this.opened = false;
      this.menuIcon = 'menu';
    }
    this.getNavLinks();
    // change top bar title based on current route
    this.router.events.subscribe((val) => {
      this.route = this.navLinksService.getNavLinkTitle(this.location.path());
    });
    this.showAvatarService.currentShowProfileAvatar.subscribe(isShown => this.showProfileAvatar = isShown);
    this.student = this.studentInfoService.getStudent();
  }

  toggleNav( fromMenu: boolean ) {

    if (fromMenu && !this.mobileQuery.matches) {
      // don't toggle
    } else {
      this.menuIcon === 'menu' ? this.menuIcon = 'close' : this.menuIcon = 'menu';
      this.sidenav.toggle();
      this.showProfileAvatar ? this.showAvatarService.change(false) : this.showAvatarService.change(true);
    }
  }

  getNavLinks(): void {
    this.navLinks = this.navLinksService.getNavLinks();
  }

  searchOnKeyUp(query: string) {
    this.searchService.setQuery(query);
  }

  search() {
    this.router.navigate(['/search'], { queryParams: { q: 'news' } });
  }

}
