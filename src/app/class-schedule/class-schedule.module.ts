import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClassScheduleComponent } from './class-schedule.component';
import { MatCardModule, MatDividerModule, MatIconModule, MatListModule,
  MatDialogModule, MatButtonModule, MatTabsModule, MatTooltipModule } from '@angular/material';
import { ClassDetailComponent } from './class-detail/class-detail.component';
import { CalendarModule } from 'angular-calendar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ListViewComponent } from './list-view/list-view.component';
import { DailyViewComponent } from './daily-view/daily-view.component';
import { WeeklyViewComponent } from './weekly-view/weekly-view.component';
import { MonthlyViewComponent } from './monthly-view/monthly-view.component';
import { ViewHeaderComponent } from './view-header/view-header.component';

@NgModule({
  imports: [
    CommonModule,
    MatCardModule,
    MatDividerModule,
    MatIconModule,
    MatListModule,
    MatButtonModule,
    MatDialogModule,
    CalendarModule,
    BrowserAnimationsModule,
    MatTabsModule,
    MatTooltipModule
  ],
  declarations: [
    ClassScheduleComponent,
    ClassDetailComponent,
    ListViewComponent,
    DailyViewComponent,
    WeeklyViewComponent,
    MonthlyViewComponent,
    ViewHeaderComponent
  ],
  entryComponents: [
    ClassDetailComponent,
  ]
})
export class ClassScheduleModule { }
