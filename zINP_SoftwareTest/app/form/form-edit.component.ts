import { Component, Input, Output, EventEmitter } from "@angular/core";
import { Box } from '../shared/shared';

@Component({
    selector: "form-edit",
    styleUrls: ['app/form/form-edit.component.css'],
    templateUrl: 'app/form/form-edit.component.html'
})

export default class FormEditComponent{
    private modelForm: any = {};


    @Input()
    set obj(obj:Box){
        this.modelForm = obj;
        console.log(obj)
    };

    get obj(){
        return this.modelForm;
    }
    @Output() updateBox: EventEmitter<any> = new EventEmitter();


    constructor(){}

    updateItem(arg:Box):void{
        this.updateBox.emit(arg);
    }


}