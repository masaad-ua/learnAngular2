import { Component, NgModule } from '@angular/core';
import { BrowserModule  } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

@Component({
    selector: 'pomodoro-timer',
    template: '<h1>{{ minutes}} : {{ seconds}}</h1>'
})

class PomodoroTimerComponent{
    minutes: number;
    seconds: number;

    constructor(){
        this.minutes = 24;
        this.seconds = 59;
        setInterval(() => this.tick(),1000)
    }
    resetPomodoro(): void{
        this.minutes = 24;
        this.seconds = 59;
    }
    private tick(): void{
        if(--this.seconds < 0){
            this.seconds =  59;
            if(--this.minutes < 0){
               this.resetPomodoro();
            }
        }
    }
}

// Main module, bootstrapping HelloAngularComponent as root component
@NgModule({
  imports: [BrowserModule],
  declarations: [PomodoroTimerComponent],
  bootstrap: [PomodoroTimerComponent],
})


export class AppModule { }

// Application bootstrap (specific for browser environments)
const platform = platformBrowserDynamic();
platform.bootstrapModule(AppModule);