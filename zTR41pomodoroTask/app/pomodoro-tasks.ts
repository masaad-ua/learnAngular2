import { Component, NgModule, Input, Pipe, PipeTransform, Directive, OnInit, HostListener} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';




// Main module, bootstrapping PomodoroTimerComponent as root component
@NgModule({
    imports: [BrowserModule],
    providers: [TaskService],
    declarations: [
        TaskIconsComponent,
        TaskTooltipDirective,
        FormattedTimePipe,
        QueuedOnlyPipe,
        TasksComponent
    ],
    bootstrap: [TasksComponent],
})
export class AppModule { }

// Application bootstrap (specific for browser environments)
const platform = platformBrowserDynamic();
platform.bootstrapModule(AppModule);