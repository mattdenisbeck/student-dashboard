export interface IBankAccount {
    id: number;
    nickname: string;
    isRefund: boolean;
    holder: string;
    routing: number;
    bank: string;
    number: number;
}

export class BankAccount implements IBankAccount {
    public id: number;
    public nickname: string;
    public isRefund: boolean;
    public holder: string;
    public routing: number;
    public bank: string;
    public number: number;

    constructor(obj?: IBankAccount);
    constructor(obj?: any) {
        this.id = obj && obj.id ? obj.id : null;
        this.nickname = obj && obj.nickname ? obj.nickname : null;
        this.isRefund = obj && obj.isRefund ? obj.isRefund : false;
        this.holder = obj && obj.holder ? obj.holder : null;
        this.routing = obj && obj.routing ? obj.routing : null;
        this.bank = obj && obj.bank ? obj.bank : null;
        this.number = obj && obj.number ? obj.number : null;
    }
}
