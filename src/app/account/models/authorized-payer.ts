export interface IAuthorizedPayer {
    id: number;
    name: string;
    startDate: Date;
    endDate: Date;
    email: string;
    dateCreated: Date;
    changedBy: string;
}

export class AuthorizedPayer implements IAuthorizedPayer {
    public id: number;
    public name: string;
    public startDate: Date;
    public endDate: Date;
    public email: string;
    public dateCreated: Date;
    public changedBy: string;

    constructor(obj?: IAuthorizedPayer);
    constructor(obj?: any) {
        this.id = obj && obj.id ? obj.id : -1;
        this.name = obj && obj.name ? obj.name : 'Default Payer';
        this.startDate = obj && obj.startDate ? new Date(obj.startDate) : new Date(Date.now());
        this.endDate = obj && obj.endDate ? new Date(obj.endDate) : new Date(2099, 12, 31);
        this.email = obj && obj.email ? obj.email : 'Default Email';
        this.dateCreated = obj && obj.dateCreated ? new Date(obj.dateCreated) : new Date(Date.now());
        this.changedBy = obj && obj.changedBy ? obj.changedBy : 'Default Editor';
    }
}
