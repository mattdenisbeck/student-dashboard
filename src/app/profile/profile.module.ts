import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './profile.component';
import { MatTabsModule, MatCardModule, MatDividerModule, MatListModule, MatIconModule, MatButtonModule,
  MatTableModule, MatTooltipModule, MatChipsModule} from '@angular/material';
import { AvatarModule } from 'ngx-avatar';
import { DashboardModule } from '../dashboard/dashboard.module';
import { AppRoutingModule } from '../app-routing.module';
import { ClassScheduleModule } from '../class-schedule/class-schedule.module';
import { GradesModule } from '../grades/grades.module';
import { AcademicPlanModule } from '../academic-plan/academic-plan.module';

@NgModule({
  imports: [
    CommonModule,
    MatTabsModule,
    AvatarModule,
    MatCardModule,
    MatDividerModule,
    MatListModule,
    DashboardModule,
    MatIconModule,
    MatButtonModule,
    AppRoutingModule,
    MatTableModule,
    MatTooltipModule,
    MatChipsModule,
    ClassScheduleModule,
    GradesModule,
    AcademicPlanModule
  ],
  declarations: [
    ProfileComponent,
  ]
})
export class ProfileModule { }
