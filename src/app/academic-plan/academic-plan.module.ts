import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AcademicPlanComponent } from './academic-plan.component';
import { AcademicPlanNextSemesterComponent } from './academic-plan-next-semester/academic-plan-next-semester.component';
import { MatCardModule, MatIconModule, MatTableModule, MatTooltipModule, MatButton, MatButtonModule } from '@angular/material';
import { AppRoutingModule } from '../app-routing.module';
import { AcademicPlanService } from './academic-plan.service';

@NgModule({
  imports: [
    CommonModule,
    MatCardModule,
    MatIconModule,
    MatTableModule,
    MatTooltipModule,
    MatButtonModule,
    AppRoutingModule
  ],
  declarations: [
    AcademicPlanComponent,
    AcademicPlanNextSemesterComponent,
  ],
  providers: [
    AcademicPlanService
  ],
  exports: [
    AcademicPlanNextSemesterComponent
  ]
})
export class AcademicPlanModule { }
