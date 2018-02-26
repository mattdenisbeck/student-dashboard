import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SettingsComponent } from './settings.component';
import { MatCard, MatCardModule, MatIconModule, MatDividerModule, MatFormFieldModule,
  MatSlideToggleModule, MatListModule, MatInputModule } from '@angular/material';
import { WidgetsService } from '../services/widgets.service';
import { NotificationsService } from '../services/notifications.service';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

describe('SettingsComponent', () => {
  let component: SettingsComponent;
  let fixture: ComponentFixture<SettingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        SettingsComponent
      ],
      imports: [
        MatCardModule,
        MatIconModule,
        MatDividerModule,
        MatFormFieldModule,
        MatSlideToggleModule,
        MatListModule,
        MatInputModule,
        NoopAnimationsModule
      ],
      providers: [
        WidgetsService,
        NotificationsService
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
