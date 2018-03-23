import { SemesterPlan } from './semester-plan';

export class AcademicPlanModel {

    constructor(
        public semesterPlan: SemesterPlan[],
        public lastEdited: Date
    ) { }

}
