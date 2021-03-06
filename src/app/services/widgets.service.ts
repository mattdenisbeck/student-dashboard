import { Injectable, ComponentFactoryResolver, Inject, ComponentFactory } from '@angular/core';
import { VitalStatsComponent } from '../dashboard/vital-stats/vital-stats.component';
import { NorseFeedComponent } from '../dashboard/norse-feed/norse-feed.component';
import { UpcomingClassesComponent } from '../class-schedule/upcoming-classes/upcoming-classes.component';
import { AcademicPlanNextSemesterComponent } from '../academic-plan/academic-plan-next-semester/academic-plan-next-semester.component';
import { DashboardWidget } from '../models/dashboard-widget';
import { StudentInfoComponent } from '../dashboard/student-info/student-info.component';
import { LatestGradesComponent } from '../grades/latest-grades/latest-grades.component';
import { AllCardBalanceComponent } from '../account/all-card-balance/all-card-balance.component';
import { TuitionBalanceComponent } from '../account/tuition-balance/tuition-balance.component';

@Injectable()
export class WidgetsService {
  rootViewContainer: any;
  factoryResolver: any;

  private widgets: DashboardWidget[];

  constructor( @Inject(ComponentFactoryResolver) factoryResolver) {
    this.factoryResolver = factoryResolver;
    this.widgets = [
      new DashboardWidget('Vital Stats', true, 'show_chart', '1', 'left',
        this.factoryResolver.resolveComponentFactory(VitalStatsComponent), true),
      new DashboardWidget('Norse Feed', true, 'notifications_active', '1', 'right',
        this.factoryResolver.resolveComponentFactory(NorseFeedComponent), true),
      new DashboardWidget('Upcoming Classes', true, 'event', '2', 'left',
        this.factoryResolver.resolveComponentFactory(UpcomingClassesComponent)),
      new DashboardWidget('Academic Plan Next Semester', true, 'date_range', '3', 'left',
        this.factoryResolver.resolveComponentFactory(AcademicPlanNextSemesterComponent)),
      new DashboardWidget('My Info', true, 'info', '2', 'right',
        this.factoryResolver.resolveComponentFactory(StudentInfoComponent)),
      new DashboardWidget('Latest Grades', true, 'assessment', '4', 'left',
        this.factoryResolver.resolveComponentFactory(LatestGradesComponent)),
      new DashboardWidget('All Card Balance', true, 'local_atm', '3', 'right',
        this.factoryResolver.resolveComponentFactory(AllCardBalanceComponent)),
      new DashboardWidget('Tuition Balance', true, 'attach_money', '4', 'right',
        this.factoryResolver.resolveComponentFactory(TuitionBalanceComponent)),
    ];

  }

  getWidgets() {
    return this.widgets.sort(
      (widget1, widget2) => {
        if ( widget1.column === 'left' && widget2.column === 'right' ) {
          return -1;
        } else if ( widget1.column === 'right' && widget2.column === 'left' ) {
          return 1;
        } else {
          return parseInt(widget1.order, 10) - parseInt(widget2.order, 10);
        }
      }
    );
  }

  setRootViewContainerRef(viewContainerRef) {
    this.rootViewContainer = viewContainerRef;
  }

  addDynamicWidget( factory: ComponentFactory<any> ) {
    // const factory = this.factoryResolver.resolveComponentFactory(DynamicComponentComponent);
    const component = factory.create(this.rootViewContainer.parentInjector);
    this.rootViewContainer.insert(component.hostView);
  }

}
