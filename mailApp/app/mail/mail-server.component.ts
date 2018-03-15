import {Component ,OnInit, ViewEncapsulation } from '@angular/core';
import {List, ListOfAllLetters} from '../shared/shared'
import {ButtonListComponent} from '../button/button';
import  ShowDate  from './show-date.directive';



@Component({
    selector:'mail-server',
    directives: [ShowDate, ButtonListComponent],
    templateUrl: 'app/mail/mail-server.component.html',
    styleUrls: ['app/mail/mail-server.component.css']
})
export default class MailServerComponent{
    listOfCurrentLetter: Array<List> = [];
    listOfAllLetter: Array<List> = [];
    textLetter: string;
    showFieldOfLetter: boolean;

    constructor(private arrayOfLetter: ListOfAllLetters ){
        this.listOfAllLetter = this.arrayOfLetter.arr;
        this.changeList("inbox");
    }

    changeList(arg:string): void {

        this.showFieldOfLetter = false;
        this.listOfCurrentLetter = this.listOfAllLetter.filter((elem: any)=>{
            //if(arg === "read" || arg === "inbox" && elem.trash === false){
            //    return (elem[arg] === true && elem.trash === false);
            //}
            //else if(arg === "unread" && elem.trash === false){
            //    return (elem.read === false && elem.trash === false);
            //}
            //else if(arg === "outbox" && elem.trash === false){
            //    return (elem.inbox === false && elem.trash === false);
            //}
            //else if(arg === "trash" && elem.trash === true){
            //    return (elem[arg] === true);
            //}
            switch (true){
                case (arg === "read" || arg === "inbox" && elem.trash === false):
                    return (elem[arg] === true && elem.trash === false);
                case (arg === "unread" && elem.trash === false):
                    return (elem.read === false && elem.trash === false);
                case (arg === "outbox" && elem.trash === false):
                    return (elem.inbox === false && elem.trash === false);
                case (arg === "trash" && elem.trash === true):
                    return (elem[arg] === true);
            }
        });
    }

    readThisLetter(i:number):void{
        this.listOfAllLetter.forEach((elem: any, index: number, arr: Array<any>)=>{
            if(elem.id === i){
                this.textLetter = elem.text;
            }
        });

        this.showFieldOfLetter = true;

    }
}
