import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LibSmartModule } from 'lib-smart';
import { LibDumbModule } from 'lib-dumb';

@NgModule({
              declarations: [
                  AppComponent
              ],
              imports:      [
                  BrowserModule,
                  AppRoutingModule,
                  LibSmartModule,
                  LibDumbModule
              ],
              providers:    [],
              bootstrap:    [AppComponent]
          })
export class AppModule {
}
