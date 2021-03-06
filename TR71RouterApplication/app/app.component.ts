import { Component } from '@angular/core';
import { SHARED_PROVIDERS } from './shared/shared';
import { HTTP_PROVIDERS } from '@angular/http';
import { ROUTER_PROVIDERS, RouteConfig, ROUTER_DIRECTIVES } from '@angular/router-deprecated';
import { TimerComponent } from './timer/timer';
import { TasksComponent, TaskEditorComponent } from './tasks/tasks';

@Component({
  selector: 'pomodoro-app',

  //Теперь заменим директивы в модуле AppComponent символом R0UTE_
  //DIRECTIVES, так как отпала необходимость объявлять в фасаде компоненты,
  //размещенные в шаблоне. Маршрутизатор сделает это сам:

  directives: [ROUTER_DIRECTIVES],
  providers: [SHARED_PROVIDERS, HTTP_PROVIDERS, ROUTER_PROVIDERS],
  styles: [`
      .router-link-active {
        font-weight: bold;
        border-bottom: 2px #d9534f solid;
      }
  `],
  templateUrl: 'app/app.component.html'
})

@RouteConfig([
  { path: '',               name: 'Home',                 redirectTo: ['TasksComponent'] },
  { path: 'tasks',          name: 'TasksComponent',       component: TasksComponent, useAsDefault: true },
  { path: 'tasks/editor',   name: 'TaskEditorComponent',  component: TaskEditorComponent },
  { path: 'timer/...',      name: 'TimerComponent',       component: TimerComponent }
  //loader: () => {
  //                  return new Promise(resolve => {
  //                    setTimeout(() => resolve(TimerComponent), 500);
  //                  });
  //                } }
])
export default class AppComponent {}
