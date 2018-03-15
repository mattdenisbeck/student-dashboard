export class AuthorizedPayer {

    constructor(
        public name?: string,
        public startDate?: Date,
        public endDate?: Date,
        public email?: string,
        public dateCreated?: Date,
        public changedBy?: string,
    ) { }

}
