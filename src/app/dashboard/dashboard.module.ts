import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule, MatListModule, MatIconModule, MatDialogModule } from '@angular/material';

import { DashboardComponent } from './dashboard.component';
import { VitalStatsComponent } from './vital-stats/vital-stats.component';
import { AppRoutingModule } from '../app-routing.module';
import { UpcomingClassesComponent } from './upcoming-classes/upcoming-classes.component';
import { NorseFeedModule } from '../norse-feed/norse-feed.module';
import { HoldsDialogComponent } from './holds-dialog/holds-dialog.component';

@NgModule({
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatListModule,
    MatIconModule,
    AppRoutingModule,
    NorseFeedModule,
    MatDialogModule
  ],
  declarations: [
    DashboardComponent,
    VitalStatsComponent,
    UpcomingClassesComponent,
    HoldsDialogComponent
  ],
  entryComponents: [
    HoldsDialogComponent
  ]
})
export class DashboardModule { }
