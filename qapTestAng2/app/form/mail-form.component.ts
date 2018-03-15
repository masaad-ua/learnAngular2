import {Component,Input} from "@angular/core"
import {Element, GetLists} from '../shared/shared';

@Component({
    selector: "mail-form",
    templateUrl : 'app/form/mail-form.component.html',
    styleUrls: ['app/form/mail-form.component.css']
})

export default class MailForm {

    form: any;
    @Input() array: Array<Element>;

    nameFocused: boolean;
    emailFocused: boolean;

    constructor(){
        this.form = {};
        this.nameFocused = false;
        this.emailFocused = false;
    }

    chooseClass(elementGroup: number): string {
        let classItem: string;

        switch (elementGroup){
            case 1:
                return classItem = "group";
            case 2:
                return classItem = "group second";
            case 3:
                return classItem = "group third";
            default:
                return classItem = "";
        }
    }
    itWasFocused(e): void{
        if(e.target.labels.item(0).innerText === "Name"){
            this.nameFocused = true;
        }
        else if(e.target.labels.item(0).innerText === "Email"){
            this.emailFocused = true;
        }
    }

    itWasBlured(e): void{
        if(e.target.labels.item(0).innerText === "Name"){
            this.nameFocused = false;
        }
        else if(e.target.labels.item(0).innerText === "Email"){
            this.emailFocused = false;
        }
    }




}