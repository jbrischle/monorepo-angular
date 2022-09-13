import { Component } from '@angular/core';

@Component({
               selector: 'lib-lib-dumb',
               template: `
                             <h3>dumb lib component</h3>
                             <p>counter: {{counter}}</p>
                             <button (click)="onIncreaseClick()">increase counter</button>
                             <button (click)="onResetClick()">reset counter</button>
                         `,
               styles:   []
           })
export class LibDumbComponent {
    counter = 0;

    onIncreaseClick(): void {
        this.counter += 1;
    }

    onResetClick(): void {
        this.counter = 0;
    }
}
