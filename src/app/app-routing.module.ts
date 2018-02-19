import { NgModule, Input } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProfileComponent } from './profile/profile.component';
import { ClassScheduleComponent } from './class-schedule/class-schedule.component';
import { AcademicPlanComponent } from './academic-plan/academic-plan.component';
import { SettingsComponent } from './settings/settings.component';
import { LogoutComponent } from './logout/logout.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { GradesComponent } from './grades/grades.component';
import { DegreeAuditComponent } from './degree-audit/degree-audit.component';
import { RegistrationComponent } from './registration/registration.component';
import { AdvisorsComponent } from './advisors/advisors.component';
import { AccountComponent } from './account/account.component';
import { SearchComponent } from './search/search.component';

const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'schedule', component: ClassScheduleComponent },
  { path: 'grades', component: GradesComponent },
  { path: 'academic-plan', component: AcademicPlanComponent },
  { path: 'degree-audit', component: DegreeAuditComponent },
  { path: 'registration', component: RegistrationComponent },
  { path: 'advisors', component: AdvisorsComponent },
  { path: 'account', component: AccountComponent },
  { path: 'search', component: SearchComponent },
  { path: 'settings', component: SettingsComponent },
  { path: 'logout', component: LogoutComponent },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule { }
