import { Component, Input, Output, NgModule, EventEmitter, ViewEncapsulation } from '@angular/core';
import { BrowserModule  } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

@Component({
    selector: 'countdown',
    template: `<h1> Time: left: {{seconds}}</h1>`,
    styles: ['h1 { color: #900}'],
    encapsulation: ViewEncapsulation.Emulated
})
class CountdownComponent{
    @Input() seconds: number;
    intervalID: number;
    @Output() complete: EventEmitter<any> = new EventEmitter();
    @Output() progress: EventEmitter<number> = new EventEmitter();

    constructor(){
        this.intervalID = setInterval(()=> this.tick(), 500 );
    }

    private tick(): void{
        if(--this.seconds < 1){
            clearInterval(this.intervalID);
            //Послать событие по окончании обратнного отсчёта
            this.complete.emit(null);
        }
        this.progress.emit(this.seconds);
    }
}

@Component({
    selector: 'pomodoro-timer',
    directives: [CountdownComponent],
    templateUrl: './pomodoro-timer.html',
    styleUrls: ['pomodoro-timer.css']
})
class PomodoroTimerComponent {
    // timeout: number;
    onCountdownCompleted(): void {
        console.log(`Time up!`);
    }
}

// Main module, bootstrapping PomodoroTimerComponent as root component
@NgModule({
    imports: [BrowserModule],
    declarations: [PomodoroTimerComponent, CountdownComponent],
    bootstrap: [PomodoroTimerComponent],
})
export class AppModule { }

// Application bootstrap (specific for browser environments)
const platform = platformBrowserDynamic();
platform.bootstrapModule(AppModule);