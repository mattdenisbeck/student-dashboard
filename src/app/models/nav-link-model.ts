export class NavLinkModel {

    constructor (
        public title: string,
        public description: string,
        public path: string,
        public icon: string,
        public leftNav: boolean,
        public weight: number,
        public external: boolean,
    ) { }

}
