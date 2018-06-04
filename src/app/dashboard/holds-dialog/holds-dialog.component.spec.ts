import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HoldsDialogComponent } from './holds-dialog.component';
import { DashboardModule } from '../dashboard.module';
import { MatIconModule, MatDividerModule, MatListModule, MatDialogModule, MatCardModule,
  MatTabsModule, MatFormFieldModule, MatSlideToggleModule, MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { AppRoutingModule } from '../../app-routing.module';
import { DashboardComponent } from '../dashboard.component';
import { VitalStatsComponent } from '../vital-stats/vital-stats.component';
import { UpcomingClassesComponent } from '../../class-schedule/upcoming-classes/upcoming-classes.component';
import { NorseFeedComponent } from '../norse-feed/norse-feed.component';
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
import { AvatarModule } from 'ngx-avatar';
import { APP_BASE_HREF } from '@angular/common';
import { HoldsService } from '../../services/holds.service';

describe('HoldsDialogComponent', () => {
  let component: HoldsDialogComponent;
  let fixture: ComponentFixture<HoldsDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        HoldsDialogComponent,
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
        MatListModule,
        MatDialogModule,
        MatCardModule,
        AvatarModule,
        MatTabsModule,
        MatFormFieldModule,
        MatSlideToggleModule
      ],
      providers: [
        { provide: APP_BASE_HREF, useValue : '/' },
        { provide: MAT_DIALOG_DATA, useValue : {} },
        HoldsService,
        { provide: MatDialogRef, useValue: {}}
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HoldsDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
