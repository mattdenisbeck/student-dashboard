import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavLinkComponent } from './nav-link.component';
import { MatIconModule, MatDividerModule, MatCardModule, MatListModule, MatTabsModule,
  MatFormFieldModule, MatSlideToggleModule } from '@angular/material';
import { AppRoutingModule } from '../app-routing.module';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { VitalStatsComponent } from '../dashboard/vital-stats/vital-stats.component';
import { UpcomingClassesComponent } from '../dashboard/upcoming-classes/upcoming-classes.component';
import { PageNotFoundComponent } from '../page-not-found/page-not-found.component';
import { LogoutComponent } from '../logout/logout.component';
import { SettingsComponent } from '../settings/settings.component';
import { SearchComponent } from '../search/search.component';
import { AccountComponent } from '../account/account.component';
import { AdvisorsComponent } from '../advisors/advisors.component';
import { RegistrationComponent } from '../registration/registration.component';
import { DegreeAuditComponent } from '../degree-audit/degree-audit.component';
import { AcademicPlanComponent } from '../academic-plan/academic-plan.component';
import { GradesComponent } from '../grades/grades.component';
import { ClassScheduleComponent } from '../class-schedule/class-schedule.component';
import { ProfileComponent } from '../profile/profile.component';
import { NorseFeedComponent } from '../norse-feed/norse-feed.component';
import { AvatarModule } from 'ngx-avatar';
import { APP_BASE_HREF } from '@angular/common';
import { NavLinkModel } from '../models/nav-link-model';

describe('NavLinkComponent', () => {
  let component: NavLinkComponent;
  let fixture: ComponentFixture<NavLinkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        NavLinkComponent,
        DashboardComponent,
        VitalStatsComponent,
        UpcomingClassesComponent,
        NorseFeedComponent,
        ProfileComponent,
        ClassScheduleComponent,
        GradesComponent,
        AcademicPlanComponent,
        DegreeAuditComponent,
        RegistrationComponent,
        AdvisorsComponent,
        AccountComponent,
        SearchComponent,
        SettingsComponent,
        LogoutComponent,
        PageNotFoundComponent
      ],
      imports: [
        MatIconModule,
        MatDividerModule,
        AppRoutingModule,
        MatCardModule,
        MatListModule,
        AvatarModule,
        MatTabsModule,
        MatFormFieldModule,
        MatSlideToggleModule
      ],
      providers: [
        { provide: APP_BASE_HREF, useValue : '/' }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavLinkComponent);
    component = fixture.componentInstance;
    component.link = {
      'title': 'Class Schedule',
      'description': 'The description of the Class Schedule',
      'path' : '/schedule',
      'icon' : 'event',
      'leftNav' : true,
      'weight' : 2,
      'external' : false
    };
    component.route = 'Class Schedule';
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
