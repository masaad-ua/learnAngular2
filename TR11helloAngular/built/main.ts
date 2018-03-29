import { Component, NgModule } from '@angular/core';
import { BrowserModule  } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import {HelloAngularComponent, MyComponent} from './facade';


// Main module, bootstrapping HelloAngularComponent as root component
@NgModule({
    imports: [BrowserModule],
    declarations: [HelloAngularComponent,MyComponent],
    bootstrap: [ HelloAngularComponent,MyComponent],
})
export class AppModule { }

// Application bootstrap (specific for browser environments)
const platform = platformBrowserDynamic();
platform.bootstrapModule(AppModule);