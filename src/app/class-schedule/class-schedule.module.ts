import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClassScheduleComponent } from './class-schedule.component';
import { MatCardModule, MatDividerModule, MatIconModule, MatListModule, MatDialogModule, MatButtonModule } from '@angular/material';
import { ClassDetailComponent } from './class-detail/class-detail.component';

@NgModule({
  imports: [
    CommonModule,
    MatCardModule,
    MatDividerModule,
    MatIconModule,
    MatListModule,
    MatDialogModule,
    MatButtonModule
  ],
  declarations: [
    ClassScheduleComponent,
    ClassDetailComponent
  ],
  entryComponents: [
    ClassDetailComponent
  ]
})
export class ClassScheduleModule { }
