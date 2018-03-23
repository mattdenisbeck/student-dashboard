import { ComponentFactory } from '@angular/core';

export class DashboardWidget {

    constructor(
        public title: string,
        public show: boolean,
        public icon: string,
        public order: string,
        public column: string,
        public factory: ComponentFactory<any>,
        public isDefault?: boolean
    ) { }

}
