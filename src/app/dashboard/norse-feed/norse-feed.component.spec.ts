import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NorseFeedComponent } from './norse-feed.component';
import { MatCardModule, MatDividerModule, MatListModule, MatIconModule, MatTabsModule, MatFormFieldModule, MatSlideToggleModule,
  MatDialog } from '@angular/material';
import { AppRoutingModule } from '../../app-routing.module';
import { ProfileComponent } from '../../profile/profile.component';
import { ClassScheduleComponent } from '../../class-schedule/class-schedule.component';
import { GradesComponent } from '../../grades/grades.component';
import { AcademicPlanComponent } from '../../academic-plan/academic-plan.component';
import { DegreeAuditComponent } from '../../degree-audit/degree-audit.component';
import { RegistrationComponent } from '../../registration/registration.component';
import { AdvisorsComponent } from '../../advisors/advisors.component';
import { AccountComponent } from '../../account/account.component';
import { SearchComponent } from '../../search/search.component';
import { SettingsComponent } from '../../settings/settings.component';
import { LogoutComponent } from '../../logout/logout.component';
import { PageNotFoundComponent } from '../../page-not-found/page-not-found.component';
import { DashboardComponent } from '../../dashboard/dashboard.component';
import { VitalStatsComponent } from '../../dashboard/vital-stats/vital-stats.component';
import { UpcomingClassesComponent } from '../../class-schedule/upcoming-classes/upcoming-classes.component';
import { AvatarModule } from 'ngx-avatar';
import { APP_BASE_HREF } from '@angular/common';
import { NorseFeedService } from '../../services/norse-feed.service';

describe('NorseFeedComponent', () => {
  let component: NorseFeedComponent;
  let fixture: ComponentFixture<NorseFeedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        NorseFeedComponent,
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
        MatCardModule,
        MatDividerModule,
        MatListModule,
        MatIconModule,
        AppRoutingModule,
        AvatarModule,
        MatTabsModule,
        MatFormFieldModule,
        MatSlideToggleModule
      ],
      providers: [
        { provide: APP_BASE_HREF, useValue : '/' },
        NorseFeedService,
        { provide: MatDialog, useValue : {} },
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NorseFeedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
