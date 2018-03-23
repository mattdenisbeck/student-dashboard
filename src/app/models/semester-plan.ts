import { ClassModel } from './class-model';

export class SemesterPlan {

    constructor(
        public semester: string,
        public courses: ClassModel[],
    ) { }

}
