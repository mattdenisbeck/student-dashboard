import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardComponent } from './dashboard.component';
import { VitalStatsComponent } from './vital-stats/vital-stats.component';
import { NorseFeedComponent } from './norse-feed/norse-feed.component';
import { MatCardModule, MatDividerModule, MatListModule, MatIconModule, MatTabsModule, MatFormFieldModule,
  MatSliderModule, MatSlideToggleModule, MatDialogModule } from '@angular/material';
import { AppRoutingModule } from '../app-routing.module';
import { ProfileComponent } from '../profile/profile.component';
import { ClassScheduleComponent } from '../class-schedule/class-schedule.component';
import { GradesComponent } from '../grades/grades.component';
import { AcademicPlanComponent } from '../academic-plan/academic-plan.component';
import { DegreeAuditComponent } from '../degree-audit/degree-audit.component';
import { RegistrationComponent } from '../registration/registration.component';
import { AdvisorsComponent } from '../advisors/advisors.component';
import { AccountComponent } from '../account/account.component';
import { SearchComponent } from '../search/search.component';
import { SettingsComponent } from '../settings/settings.component';
import { LogoutComponent } from '../logout/logout.component';
import { PageNotFoundComponent } from '../page-not-found/page-not-found.component';
import { AvatarModule } from 'ngx-avatar';
import { APP_BASE_HREF } from '@angular/common';
import { WidgetsService } from '../services/widgets.service';
import { ClassScheduleService } from '../services/class-schedule.service';
import { NorseFeedService } from '../services/norse-feed.service';

describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        DashboardComponent,
        VitalStatsComponent,
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
        MatSlideToggleModule,
        MatDialogModule
      ],
      providers: [
        { provide: APP_BASE_HREF, useValue : '/' },
        WidgetsService,
        ClassScheduleService,
        NorseFeedService
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
