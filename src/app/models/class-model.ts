export class ClassModel {

    constructor(
        public number: string,
        public title: string,
        public location: string,
        public days: string[],
        public day: string,  // used when generating list of upcoming classes
        public startTime: Date,
        public endTime: Date,
        public instructor: string,
        public icon: string,
    ) { }

}
