import { Component } from '@angular/core';
import {BUTTON_DIRECTIVES} from './button/button';
import {MAIL_DIRECTIVES} from './mail/mail';
import {USERS_DIRECTIVES} from './users/users';

import {SHARED_PROVIDERS} from './shared/shared';
import {HTTP_PROVIDERS} from '@angular/http';

import { MailEditorComponent, MailServerComponent } from './mail/mail';
import { UsersComponent } from './users/users'
import {ROUTER_PROVIDERS, RouteConfig, ROUTER_DIRECTIVES } from '@angular/router-deprecated';
import { LoginComponent } from './login/login';

//import {MailEditorComponent } from './tasks/tasks';

@Component({
    selector: 'mail-app',
    //directives: [BUTTON_DIRECTIVES, MAIL_DIRECTIVES],
    directives: [ROUTER_DIRECTIVES],
    providers: [SHARED_PROVIDERS, HTTP_PROVIDERS, ROUTER_PROVIDERS],
    templateUrl: 'app/app.component.html'

})

@RouteConfig ([
    {
        path: 'mail',
        name: 'MailServerComponent',
        component: MailServerComponent,
        useAsDefault: true
    },
    {
        path: 'mail/editor',
        name: 'MailEditorComponent',
        component: MailEditorComponent
    },
    {
        path: 'users',
        name: 'UsersComponent',
        component: UsersComponent
    },
    {
        path: 'login',
        name: 'LoginComponent',
        component: LoginComponent
    }
])
export default class AppComponent{}