import { Component } from '@angular/core';
import {LISTS_DIRECTIVES} from './lists/lists';
import {SHARED_PROVIDERS, SHARED_DIRECTIVES} from './shared/shared';
import {HTTP_PROVIDERS} from '@angular/http';
import {FORM_DIRECTIVES} from "./form/form";
//import {BUTTON_DIRECTIVES} from './button/button';
//import {MAIL_DIRECTIVES} from './mail/mail';
//import {USERS_DIRECTIVES} from './users/users';
//
//import {SHARED_PROVIDERS} from './shared/shared';
//import {HTTP_PROVIDERS} from '@angular/http';
//
//import { MailEditorComponent, MailServerComponent } from './mail/mail';
//import { UsersComponent } from './users/users'
//import {ROUTER_PROVIDERS, RouteConfig, ROUTER_DIRECTIVES } from '@angular/router-deprecated';
//import { LoginComponent } from './login/login';

//import {MailEditorComponent } from './tasks/tasks';

@Component({
    selector: 'testqap-app',
    directives: [LISTS_DIRECTIVES, FORM_DIRECTIVES, SHARED_DIRECTIVES],
    providers: [SHARED_PROVIDERS, HTTP_PROVIDERS],
    //directives: [ROUTER_DIRECTIVES],
    //providers: [SHARED_PROVIDERS, HTTP_PROVIDERS, ROUTER_PROVIDERS],
    templateUrl: 'app/app.component.html'

})

export default class AppComponent{

    swiped: boolean;
    arrayOfCheckedItem: Array<Element>;

    constructor(){
        this.swiped = true;
        this.arrayOfCheckedItem = [];

    }
    onSwiped(arg): void{
        this.swiped = arg;
        //console.log(arg);
    }

    updateArrayOfCheckedItems(arg):void {

        console.log(arg);
        console.log(this.arrayOfCheckedItem);
    }
}