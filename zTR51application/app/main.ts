import {Component, NgModule } from '@angular/core';
import {BrowserModule } from '@angular/platform-browser';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';

import AppComponent from './app.component';
import { TIMER_DIRECTIVES } from './timer/timer';
import { TASKS_DIRECTIVES } from './tasks/tasks';
import { SHARED_PROVIDERS } from './shared/shared';

// Main module, bootstrapping PomodoroTimerComponent as root component
@NgModule({
    imports: [BrowserModule],
    providers: [SHARED_PROVIDERS],
    declarations: [AppComponent, TIMER_DIRECTIVES, TASKS_DIRECTIVES],
    bootstrap: [AppComponent]
})
export class AppModule { }

// Application bootstrap (specific for browser environments)
const platform = platformBrowserDynamic();
platform.bootstrapModule(AppModule);