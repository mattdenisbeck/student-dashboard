import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdvisorsComponent } from './advisors.component';
import { MatCardModule, MatIconModule, MatButtonModule, MatListModule, MatDialogModule, MatInputModule,
  MatDatepickerModule, MatNativeDateModule, MatSelectModule, MatSnackBarModule, MatProgressBarModule} from '@angular/material';
import { AdvisorsService } from './advisors.service';
import { MessageDialogComponent } from './message-dialog/message-dialog.component';
import { AppointmentDialogComponent } from './appointment-dialog/appointment-dialog.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    MatCardModule,
    MatIconModule,
    MatButtonModule,
    MatListModule,
    MatDialogModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSelectModule,
    FlexLayoutModule,
    MatSnackBarModule,
    ReactiveFormsModule,
    MatProgressBarModule
  ],
  declarations: [
    AdvisorsComponent,
    MessageDialogComponent,
    AppointmentDialogComponent
  ],
  providers: [
    AdvisorsService
  ],
  entryComponents: [
    MessageDialogComponent,
    AppointmentDialogComponent
  ]
})
export class AdvisorsModule { }
