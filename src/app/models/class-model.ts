export class ClassModel {
    number: string;
    title: string;
    location: string;
    days: string[];
    day: string;  // used when generating list of upcoming classes
    startTime: Date;
    endTime: Date;
    instructor: string;
    icon: string;
}
