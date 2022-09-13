import { NgModule } from '@angular/core';
import { LibSmartComponent } from './lib-smart.component';
import { JsonPipe } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
              declarations: [
                  LibSmartComponent
              ],
              imports:      [
                  HttpClientModule,
                  JsonPipe
              ],
              exports:      [
                  LibSmartComponent
              ],
          })
export class LibSmartModule {
}
