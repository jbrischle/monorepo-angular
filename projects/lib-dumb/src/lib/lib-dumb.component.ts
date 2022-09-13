import { Component, OnInit } from '@angular/core';

@Component({
               selector: 'lib-lib-dumb',
               template: `
                             <h3>dumb lib component</h3>
                         `,
               styles:   []
           })
export class LibDumbComponent implements OnInit {

    constructor() {
    }

    ngOnInit(): void {
    }

}
