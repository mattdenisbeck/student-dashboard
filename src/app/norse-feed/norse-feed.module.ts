import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule, MatIconModule, MatDividerModule, MatListModule } from '@angular/material';
import { AppRoutingModule } from '../app-routing.module';
import { NorseFeedComponent } from './norse-feed.component';

@NgModule({
    imports: [
        CommonModule,
        MatCardModule,
        AppRoutingModule,
        MatIconModule,
        MatDividerModule,
        MatListModule
    ],
    declarations: [
        NorseFeedComponent
    ],
    exports: [
        NorseFeedComponent
    ]
})

export class NorseFeedModule { }
