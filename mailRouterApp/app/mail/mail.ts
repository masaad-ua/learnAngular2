import MailServerComponent from './mail-server.component';
import MailEditorComponent from './mail-editor.component';
import ShowDate from './show-date.directive';

const MAIL_DIRECTIVES: any[] = [
    MailServerComponent,
    ShowDate,
    MailEditorComponent
];

export{
    MAIL_DIRECTIVES,
    MailServerComponent,
    ShowDate,
    MailEditorComponent
}