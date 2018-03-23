import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GradesComponent } from './grades.component';
import { MatTableModule, MatIconModule, MatCardModule, MatButtonModule, MatFormFieldModule, MatSelectModule,
  MatTooltipModule, MatChipsModule} from '@angular/material';
import { TermGradesComponent } from './term-grades/term-grades.component';
import { GradesReportComponent } from './grades-report/grades-report.component';
import { LatestGradesComponent } from './latest-grades/latest-grades.component';
import { AppRoutingModule } from '../app-routing.module';

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
    AppRoutingModule
  ],
  declarations: [
    GradesComponent,
    TermGradesComponent,
    GradesReportComponent,
    LatestGradesComponent
  ],
  exports: [
    LatestGradesComponent
  ]
})
export class GradesModule { }
