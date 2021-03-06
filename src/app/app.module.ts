import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatCheckboxModule, MatSidenavModule, MatToolbarModule} from '@angular/material';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { AppComponent } from './app.component';
import { NavLinksService } from './services/nav-links.service';
import { AppRoutingModule } from './app-routing.module';
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
import { CalendarModule } from 'angular-calendar';
import { GradesService } from './services/grades.service';
import { StudentInfoService } from './services/student-info.service';
import { ProfileBannerService } from './services/profile-banner.service';
import { NavHeaderComponent } from './nav-header/nav-header.component';
import { PLATFORM_ID, APP_ID, Inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { CallApiService } from './services/call-api.service';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './services/in-memory-data.service';
import { httpInterceptorProviders } from './http-interceptors';
import { RequestCache, RequestCacheWithMap } from './services/request-cache.service';

@NgModule({
  declarations: [
    AppComponent,
    LogoutComponent,
    NavLinkComponent,
    PageNotFoundComponent,
    NavHeaderComponent,
  ],
  imports: [
    BrowserModule.withServerTransition({
      appId: 'student-dashboard'
    }),
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatSidenavModule,
    MatToolbarModule,
    MatListModule,
    MatIconModule,
    MatDividerModule,
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
    SearchModule,
    CalendarModule.forRoot(),
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false, delay: 500 }
    )
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
    ClassScheduleService,
    GradesService,
    StudentInfoService,
    ProfileBannerService,
    CallApiService,
    { provide: RequestCache, useClass: RequestCacheWithMap },
    httpInterceptorProviders
  ],
  bootstrap: [AppComponent]
})

export class AppModule {

  constructor( @Inject(PLATFORM_ID) private platformId: Object, @Inject(APP_ID) private appId: string ) {

    const platform = isPlatformBrowser(platformId) ? 'in the browser' : 'on the server';
    console.log(`Running ${platform} with appId=${appId}`);

  }

}
