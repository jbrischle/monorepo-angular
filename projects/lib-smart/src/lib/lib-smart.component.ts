import { Component, OnInit } from '@angular/core';
import { LibSmartService } from './lib-smart.service';

@Component({
               selector:  'lib-smart',
               template:  `
                              <div class="border">
                                  <h3>smart lib component</h3>
                                  <button (click)="loadNewFact()">give me a new fact</button>
                                  <div>{{fact.fact}}</div>
                              </div>
                          `,
               styleUrls: ['./lib-smart.component.css']
           })
export class LibSmartComponent implements OnInit {
    fact: any;

    constructor(private readonly backend: LibSmartService) {
    }

    ngOnInit(): void {
        this.loadNewFact();
    }

    loadNewFact(): void {
        this.backend.getFact().subscribe(fact => this.fact = fact);
    }

}
