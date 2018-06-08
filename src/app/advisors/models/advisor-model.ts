export interface IAdvisorModel {
    fName: string;
    lName: string;
    department: string;
    position: string;
    email: string;
    office: string;
    phone: string;
    type: string;
}

export class AdvisorModel implements IAdvisorModel {
    public fName: string;
    public lName: string;
    public department: string;
    public position: string;
    public email: string;
    public office: string;
    public phone: string;
    public type: string;

    constructor(obj?: IAdvisorModel);
    constructor(obj?: any) {
        this.fName = obj && obj.fName ? obj.fName : 'Default First Name';
        this.lName = obj && obj.lName ? obj.lName : 'Default Last Name';
        this.department = obj && obj.department ? obj.department : 'Default Department';
        this.position = obj && obj.position ? obj.position : 'Default Position';
        this.email = obj && obj.email ? obj.email : 'Default Email';
        this.office = obj && obj.office ? obj.office : 'Default Office';
        this.phone = obj && obj.phone ? obj.phone : 'Default Phone';
        this.type = obj && obj.type ? obj.type : 'Default Type';
    }
}
