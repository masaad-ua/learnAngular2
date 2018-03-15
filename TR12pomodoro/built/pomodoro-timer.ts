import { Component, NgModule } from '@angular/core';
import { BrowserModule  } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

// Our first "Hello world" component
@Component({
  selector: 'pomodoro-timer',
  template: `<div class="text-center">
                <img src="assets/img/pomodoro.png" alt="Pomodoro">
                  <h1> {{ minutes }}:{{ seconds | number: '2.0' }} </h1>
                <p>
                  <button (click)="togglePause()" class="btn btn-danger">{{ buttonLabel }}</button>
                </p>
            </div>`
})

class  PomodoroTimerComponent{
  minutes: number;
  seconds: number;
  isPaused: boolean;
  buttonLabel: string;


  constructor(){
   this.resetPomodoro();
    setInterval(() => this.tick(), 100);
  }
  resetPomodoro(): void{
    this.minutes = 24;
    this.seconds = 59;
    this.buttonLabel = 'Start';
    this.togglePause();
  }
  tick(): void{
    if(!this.isPaused){
      this.buttonLabel = 'Pause';
      if(--this.seconds < 0){
        this.seconds = 59;
        if (--this.minutes < 0){
          this.resetPomodoro();
        }
      }
    }
  }


  togglePause(): void{
    this.isPaused = !this.isPaused;
    // если начат обратный отсчёт
    if(this.minutes < 24 || this.seconds < 59){
      this.buttonLabel = this.isPaused ? 'Resume' : 'Pause';
    }
  }
}

// Main module, bootstrapping PomodoroTimerComponent as root component
@NgModule({
  imports: [BrowserModule],
  declarations: [PomodoroTimerComponent],
  bootstrap: [PomodoroTimerComponent],
})
export class AppModule { }

// Application bootstrap (specific for browser environments)
const platform = platformBrowserDynamic();
platform.bootstrapModule(AppModule);