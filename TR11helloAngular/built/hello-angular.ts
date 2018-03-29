import { Component, NgModule } from '@angular/core';
import { BrowserModule  } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

// Our first "Hello world" component
@Component({
  selector: 'hello-angular',
  templateUrl: 'built/hello-angular.template.html'
})
export class HelloAngularComponent {
  greeting: string;
  constructor() {
    this.greeting = "Hello Angular 22!";
  }
}

@Component({
  selector: 'my-component',
  template: `<h2>{{element}}</h2>`
})
export class MyComponent {
  element: string;
  constructor() {
    this.element = "HOHOH"
  }
}



 //Main module, bootstrapping HelloAngularComponent as root component
//@NgModule({
//  imports: [BrowserModule],
//  declarations: [MyComponent, HelloAngularComponent],
//  bootstrap: [ MyComponent, HelloAngularComponent],
//})
//export class AppModule { }

// Application bootstrap (specific for browser environments)
//const platform = platformBrowserDynamic();
//platform.bootstrapModule(AppModule);