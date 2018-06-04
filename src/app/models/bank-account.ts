export class BankAccount {

    constructor(
        public id?: number,
        public nickname?: string,
        public isRefund?: boolean,
        public holder?: string,
        public routing?: number,
        public bank?: string,
        public number?: number,
    ) { }

}
