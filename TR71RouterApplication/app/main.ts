import 'rxjs/add/operator/map';
import { bootstrap } from '@angular/platform-browser-dynamic';
import AppComponent from './app.component';

import { provide } from '@angular/core';
import { APP_BASE_HREF } from '@angular/common';

import {LocationStrategy, HashLocationStrategy } from '@angular/common';

//bootstrap(AppComponent,[provide(APP_BASE_HREF, {
//    useValue: '/my-apps/pomodoro-app'})]);

//bootstrap(AppComponent,[]);

bootstrap(AppComponent, [provide(LocationStrategy, {
    useClass: HashLocationStrategy
})]);