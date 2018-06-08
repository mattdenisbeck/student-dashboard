import { ClassModel } from '../../models/class-model';

export interface ISemesterPlan {
    semester: string;
    courses: ClassModel[];
}

export class SemesterPlan implements ISemesterPlan {
    public semester: string;
    public courses: ClassModel[];

    constructor(obj?: ISemesterPlan);
    constructor(obj?: any) {
        this.semester = obj && obj.semester ? obj.semester : 'Default Semester';
        this.courses = obj && obj.courses ? obj.courses.slice(0) : [];
    }

}
