import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GradesComponent } from './grades.component';
import { MatTableModule, MatIconModule, MatCardModule, MatButtonModule, MatFormFieldModule, MatSelectModule,
  MatTooltipModule} from '@angular/material';
import { TermGradesComponent } from './term-grades/term-grades.component';
import { GradesReportComponent } from './grades-report/grades-report.component';

@NgModule({
  imports: [
    CommonModule,
    MatTableModule,
    MatIconModule,
    MatCardModule,
    MatButtonModule,
    MatFormFieldModule,
    MatSelectModule,
    MatTooltipModule
  ],
  declarations: [
    GradesComponent,
    TermGradesComponent,
    GradesReportComponent
  ]
})
export class GradesModule { }
