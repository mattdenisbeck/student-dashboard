import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GradesComponent } from './grades.component';
import { MatTableModule, MatIconModule, MatCardModule, MatButtonModule, MatFormFieldModule, MatSelectModule,
  MatTooltipModule, MatChipsModule, MatExpansionModule, MatListModule, MatDividerModule, MatProgressBarModule} from '@angular/material';
import { TermGradesComponent } from './term-grades/term-grades.component';
import { GradesReportComponent } from './grades-report/grades-report.component';
import { LatestGradesComponent } from './latest-grades/latest-grades.component';
import { AppRoutingModule } from '../app-routing.module';
import { AssignmentGradesComponent } from './assignment-grades/assignment-grades.component';
import { AssignmentGradesPanelComponent } from './assignment-grades-panel/assignment-grades-panel.component';

@NgModule({
  imports: [
    CommonModule,
    MatTableModule,
    MatIconModule,
    MatCardModule,
    MatButtonModule,
    MatFormFieldModule,
    MatSelectModule,
    MatTooltipModule,
    MatChipsModule,
    MatExpansionModule,
    MatListModule,
    MatDividerModule,
    AppRoutingModule,
    MatProgressBarModule
  ],
  declarations: [
    GradesComponent,
    TermGradesComponent,
    GradesReportComponent,
    LatestGradesComponent,
    AssignmentGradesComponent,
    AssignmentGradesPanelComponent
  ],
  exports: [
    LatestGradesComponent
  ]
})
export class GradesModule { }
