import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SettingsComponent } from './settings.component';
import { MatCardModule, MatIconModule, MatListModule, MatSlideToggleModule, MatButtonModule, MatTooltipModule,
   MatFormFieldModule, MatInputModule, MatSelectModule, MatRadioModule  } from '@angular/material';
import { FormsModule } from '@angular/forms';

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
    MatInputModule,
    MatSelectModule,
    FormsModule,
    MatRadioModule
  ],
  declarations: [
    SettingsComponent
  ]
})
export class SettingsModule { }
