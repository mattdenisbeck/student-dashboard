import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './profile.component';
import { MatTabsModule } from '@angular/material';
import { NorseFeedModule } from '../norse-feed/norse-feed.module';
import { AvatarModule } from 'ngx-avatar';

@NgModule({
  imports: [
    CommonModule,
    MatTabsModule,
    NorseFeedModule,
    AvatarModule
  ],
  declarations: [
    ProfileComponent
  ],
  exports: [
    ProfileComponent
  ]
})
export class ProfileModule { }
