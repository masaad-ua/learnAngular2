import { Component } from '@angular/core';
import {SHARED_PROVIDERS} from './shared/shared';
import {HTTP_PROVIDERS} from '@angular/http';
import {BOXS_DIRECTIVES} from './boxs/boxs';
import {FORM_DIRECTIVES} from './form/form';

@Component({
    selector: 'box-app',
    directives: [ BOXS_DIRECTIVES, FORM_DIRECTIVES],
    providers: [SHARED_PROVIDERS, HTTP_PROVIDERS],
    template:`
        <box-container ></box-container>
    `
})

export default class AppComponent{



    constructor(){

    }



}