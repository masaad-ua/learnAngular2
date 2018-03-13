import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router-deprecated';

@Component({
    selector: 'mail-editor',
    directives: [ROUTER_DIRECTIVES],
    templateUrl: 'app/mail/mail-editor.component.html'
})

export default class MailEditorComponent {
    constructor() {}
}