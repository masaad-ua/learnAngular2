import { Component, Input, Output, NgModule, EventEmitter, ViewEncapsulation } from '@angular/core';
import { BrowserModule  } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

@Component({
    selector: 'countdown',
    template: `<h1> Time: left: {{seconds}}</h1>`,
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
    template: `<div class="container text-center">
                    <img src="assets/img/pomodoro.png" />
                    <!-- Создаём локальную ссылку на компонент CountdownComponent...
                    Если пометить экземпляр компонента CountdownComponent в ша­
                    блоне PomodoroTimerComponent локальной ссылкой #counter, у нас по­
                    явится возможность прямого доступа к общедоступным свойствам
                    компонента -->
                    <countdown  [seconds] ="25"
                                (complete)="onCountdownCompleted()"
                                (progress)="timeout = $event">
                    </countdown>
                    <p *ngIf="timeout < 10">
                        Beware! Only
                        <strong>{{timeout}} seconds</strong>
                        left.
                    </p>
                </div>`
})
class PomodoroTimerComponent {
    timeout: number;
    onCountdownCompleted(): void {
        //alert(`Time up!`);
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