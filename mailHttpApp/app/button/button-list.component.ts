import {Component, Output, EventEmitter} from '@angular/core';

@Component({
        selector: 'button-list',
        templateUrl: 'app/button/button-list.component.html',
    }
)
export default class ButtonListComponent{
    buttonArray: string[] = ["inbox","read", "unread", "outbox", "trash"];
    @Output() buttonWasClicked: EventEmitter<any> = new EventEmitter();

    // Послать событие
    clickButton(arg): void{
        this.buttonWasClicked.emit(arg);
    }
}