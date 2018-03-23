import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule, MatListModule, MatIconModule, MatDialogModule, MatTableModule, MatTooltipModule } from '@angular/material';
import { DashboardComponent } from './dashboard.component';
import { VitalStatsComponent } from './vital-stats/vital-stats.component';
import { AppRoutingModule } from '../app-routing.module';
import { HoldsDialogComponent } from './holds-dialog/holds-dialog.component';
import { NorseFeedComponent } from './norse-feed/norse-feed.component';
import { ClassScheduleModule } from '../class-schedule/class-schedule.module';
import { AcademicPlanModule } from '../academic-plan/academic-plan.module';
import { StudentInfoComponent } from './student-info/student-info.component';
import { UpcomingClassesComponent } from '../class-schedule/upcoming-classes/upcoming-classes.component';
import { AcademicPlanNextSemesterComponent } from '../academic-plan/academic-plan-next-semester/academic-plan-next-semester.component';
import { LatestGradesComponent } from '../grades/latest-grades/latest-grades.component';

@NgModule({
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatListModule,
    MatIconModule,
    AppRoutingModule,
    MatDialogModule,
    MatTableModule,
    MatTooltipModule,
    ClassScheduleModule,
    AcademicPlanModule
  ],
  declarations: [
    DashboardComponent,
    NorseFeedComponent,
    VitalStatsComponent,
    HoldsDialogComponent,
    StudentInfoComponent
  ],
  entryComponents: [
    HoldsDialogComponent,
    VitalStatsComponent,
    NorseFeedComponent,
    UpcomingClassesComponent,
    AcademicPlanNextSemesterComponent,
    StudentInfoComponent,
    LatestGradesComponent
  ],
  exports: [
    NorseFeedComponent,
    StudentInfoComponent
  ]
})
export class DashboardModule { }
