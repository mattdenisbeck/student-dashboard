import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileComponent } from './profile.component';
import { AvatarModule } from 'ngx-avatar';
import { NorseFeedComponent } from '../dashboard/norse-feed/norse-feed.component';
import { MatTabsModule, MatCardModule, MatListModule, MatIconModule, MatFormFieldModule,
  MatSlideToggleModule, MatDialogModule } from '@angular/material';
import { AppRoutingModule } from '../app-routing.module';
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
import { UpcomingClassesComponent } from '../class-schedule/upcoming-classes/upcoming-classes.component';
import { VitalStatsComponent } from '../dashboard/vital-stats/vital-stats.component';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { APP_BASE_HREF } from '@angular/common';
import { ShowProfileAvatarService } from '../services/show-profile-avatar.service';
import { NorseFeedService } from '../services/norse-feed.service';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

describe('ProfileComponent', () => {
  let component: ProfileComponent;
  let fixture: ComponentFixture<ProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        ProfileComponent,
        NorseFeedComponent,
        DashboardComponent,
        VitalStatsComponent,
        UpcomingClassesComponent,
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
        AvatarModule,
        MatTabsModule,
        MatCardModule,
        MatListModule,
        AppRoutingModule,
        MatIconModule,
        MatFormFieldModule,
        MatSlideToggleModule,
        MatDialogModule,
        NoopAnimationsModule
      ],
      providers: [
        { provide: APP_BASE_HREF, useValue : '/' },
        ShowProfileAvatarService,
        NorseFeedService
      ]

    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
