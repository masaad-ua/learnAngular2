import { Component } from '@angular/core';
import {BUTTON_DIRECTIVES} from './button/button';
import {MAIL_DIRECTIVES} from './mail/mail';
import {SHARED_PROVIDERS} from './shared/shared';
import {HTTP_PROVIDERS} from '@angular/http';

@Component({
    selector: 'mail-app',
    directives: [BUTTON_DIRECTIVES, MAIL_DIRECTIVES],
    providers: [SHARED_PROVIDERS, HTTP_PROVIDERS],
    template:`
            <nav class="navbar navbar-default navbar-static-top">
              <div class="container">
                <div class="navbar-header">
                  <strong class="navbar-brand">My Mail Server</strong>
                </div>
              </div>
            </nav>
            <mail-server></mail-server>`
})

export default class AppComponent{}