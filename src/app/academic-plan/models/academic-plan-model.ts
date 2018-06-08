import { SemesterPlan } from './semester-plan';

export interface IAcademicPlanModel {
    semesterPlan: SemesterPlan[];
    lastEdited: Date;
}

export class AcademicPlanModel implements IAcademicPlanModel {
    public semesterPlan: SemesterPlan[];
    public lastEdited: Date;

    constructor(obj?: IAcademicPlanModel);
    constructor(obj?: any) {
        this.semesterPlan = obj && obj.semesterPlan ? obj.semesterPlan.slice(0) : [];
        this.lastEdited = obj && obj.lastEdited ? new Date(obj.lastEdited) : new Date(Date.now());
    }

}
