import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchComponent } from './search.component';
import { MatCardModule, MatIconModule, MatDividerModule, MatListModule } from '@angular/material';
import { AppRoutingModule } from '../app-routing.module';

@NgModule({
  imports: [
    CommonModule,
    MatCardModule,
    AppRoutingModule,
    MatIconModule,
    MatDividerModule,
    MatListModule
  ],
  declarations: [SearchComponent]
})
export class SearchModule { }
