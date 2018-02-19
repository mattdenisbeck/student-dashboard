import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatCheckboxModule, MatSidenavModule, MatToolbarModule} from '@angular/material';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { AvatarModule } from 'ngx-avatar';
import { AppComponent } from './app.component';
import { NavLinksService } from './services/nav-links.service';
import { AppRoutingModule } from './/app-routing.module';
import { LogoutComponent } from './logout/logout.component';
import { NavLinkComponent } from './nav-link/nav-link.component';
import { DashboardModule } from './dashboard/dashboard.module';
import { ClassScheduleModule } from './class-schedule/class-schedule.module';
import { AcademicPlanModule } from './academic-plan/academic-plan.module';
import { ProfileModule } from './profile/profile.module';
import { SettingsModule } from './settings/settings.module';
import { NorseFeedService } from './services/norse-feed.service';
import { MediaMatcher } from '@angular/cdk/layout';
import { WidgetsService } from './services/widgets.service';
import { NotificationsService } from './services/notifications.service';
import { ShowProfileAvatarService } from './services/show-profile-avatar.service';
import { HoldsService } from './services/holds.service';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { GradesModule } from './grades/grades.module';
import { DegreeAuditModule } from './degree-audit/degree-audit.module';
import { RegistrationModule } from './registration/registration.module';
import { AdvisorsModule } from './advisors/advisors.module';
import { AccountModule } from './account/account.module';
import { SearchModule } from './search/search.module';
import { SearchService } from './services/search.service';
import { ClassScheduleService } from './services/class-schedule.service';

@NgModule({
  declarations: [
    AppComponent,
    LogoutComponent,
    NavLinkComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatSidenavModule,
    MatToolbarModule,
    MatListModule,
    MatIconModule,
    MatDividerModule,
    AvatarModule,
    AppRoutingModule,
    DashboardModule,
    ClassScheduleModule,
    AcademicPlanModule,
    ProfileModule,
    SettingsModule,
    GradesModule,
    DegreeAuditModule,
    RegistrationModule,
    AdvisorsModule,
    AccountModule,
    SearchModule
  ],
  providers: [
    NavLinksService,
    NorseFeedService,
    MediaMatcher,
    WidgetsService,
    NotificationsService,
    ShowProfileAvatarService,
    HoldsService,
    SearchService,
    ClassScheduleService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
