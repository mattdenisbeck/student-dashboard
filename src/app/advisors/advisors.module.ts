import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdvisorsComponent } from './advisors.component';
import { MatCardModule, MatIconModule, MatButtonModule, MatListModule, MatDialogModule, MatInputModule,
  MatDatepickerModule, MatNativeDateModule, MatSelectModule} from '@angular/material';
import { AvatarModule } from 'ngx-avatar';
import { AdvisorsService } from '../services/advisors.service';
import { MessageDialogComponent } from './message-dialog/message-dialog.component';
import { AppointmentDialogComponent } from './appointment-dialog/appointment-dialog.component';

@NgModule({
  imports: [
    CommonModule,
    MatCardModule,
    MatIconModule,
    MatButtonModule,
    AvatarModule,
    MatListModule,
    MatDialogModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSelectModule
  ],
  declarations: [
    AdvisorsComponent,
    MessageDialogComponent,
    AppointmentDialogComponent
  ],
  providers: [AdvisorsService],
  entryComponents: [
    MessageDialogComponent,
    AppointmentDialogComponent
  ]
})
export class AdvisorsModule { }
