import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchComponent } from './search.component';
import { MatCardModule, MatIconModule, MatListModule, MatTabsModule, MatFormFieldModule, MatSlideToggleModule } from '@angular/material';
import { AppRoutingModule } from '../app-routing.module';
import { PageNotFoundComponent } from '../page-not-found/page-not-found.component';
import { LogoutComponent } from '../logout/logout.component';
import { SettingsComponent } from '../settings/settings.component';
import { AccountComponent } from '../account/account.component';
import { AdvisorsComponent } from '../advisors/advisors.component';
import { RegistrationComponent } from '../registration/registration.component';
import { DegreeAuditComponent } from '../degree-audit/degree-audit.component';
import { AcademicPlanComponent } from '../academic-plan/academic-plan.component';
import { GradesComponent } from '../grades/grades.component';
import { ClassScheduleComponent } from '../class-schedule/class-schedule.component';
import { ProfileComponent } from '../profile/profile.component';
import { NorseFeedComponent } from '../dashboard/norse-feed/norse-feed.component';
import { UpcomingClassesComponent } from '../class-schedule/upcoming-classes/upcoming-classes.component';
import { VitalStatsComponent } from '../dashboard/vital-stats/vital-stats.component';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { AvatarModule } from 'ngx-avatar';
import { APP_BASE_HREF } from '@angular/common';
import { SearchService } from '../services/search.service';
import { NavLinksService } from '../services/nav-links.service';

describe('SearchComponent', () => {
  let component: SearchComponent;
  let fixture: ComponentFixture<SearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        SearchComponent,
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
        SettingsComponent,
        LogoutComponent,
        PageNotFoundComponent
      ],
      imports: [
        MatCardModule,
        AppRoutingModule,
        MatIconModule,
        MatListModule,
        AvatarModule,
        MatTabsModule,
        MatFormFieldModule,
        MatSlideToggleModule
      ],
      providers: [
        { provide: APP_BASE_HREF, useValue : '/' },
        SearchService,
        NavLinksService
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
