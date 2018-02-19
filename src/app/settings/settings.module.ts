import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SettingsComponent } from './settings.component';
import { MatCardModule, MatIconModule, MatListModule, MatSlideToggleModule, MatButtonModule, MatTooltipModule,
   MatFormFieldModule, MatInputModule  } from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    MatCardModule,
    MatIconModule,
    MatListModule,
    MatSlideToggleModule,
    MatButtonModule,
    MatTooltipModule,
    MatFormFieldModule,
    MatInputModule
  ],
  declarations: [
    SettingsComponent
  ]
})
export class SettingsModule { }
