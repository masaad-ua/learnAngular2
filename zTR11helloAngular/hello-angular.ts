import { Component, NgModule } from '@angular/core';
import { BrowserModule  } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';


@Component({
    selector: 'hello-angular',
    template: '<h1>{{greeting}}</h1>'
})

class HelloAngularComponent{
    greeting: string;
    constructor(){
        this.greeting = 'hello Angular';
    }
}

// Main module, bootstrapping HelloAngularComponent as root component
@NgModule({
  imports: [BrowserModule],
  declarations: [ HelloAngularComponent],
  bootstrap: [ HelloAngularComponent],
})
export class AppModule { }

// Application bootstrap (specific for browser environments)
const platform = platformBrowserDynamic();
platform.bootstrapModule(AppModule);