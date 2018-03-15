import { Component , OnInit, Input, Output, EventEmitter} from "@angular/core";
import { NgStyle } from '@angular/common';
import {FormEditComponent} from '../form/form';
import { Box, ListOfBoxes } from '../shared/shared';


@Component({
    selector: "box-container",
    directives: [FormEditComponent],
    styleUrls: ['app/boxs/boxs.component.css'],
    templateUrl: 'app/boxs/boxs.component.html'
})

export default class BoxsComponent implements OnInit {
    listOfBoxs: Array<Box> = [];
    showForm: boolean = false;
    box: Box;

        constructor( private arrayOfBoxs: ListOfBoxes){

    };



    ngOnInit(): void {
        this.arrayOfBoxs.arrFeed.subscribe(newItem =>{
            this.listOfBoxs.push(newItem);
        });

    }

    chooseBox( arg: number):void{
        console.log(this.showForm);
        this.listOfBoxs.forEach((element: any)=>{
            if (element.id === arg){
                this.box = JSON.parse(JSON.stringify(element));
            }
        });
        this.showForm = true;



    }

    updateListOfBox(arg:Box):void{
        this.listOfBoxs.forEach((elem: Box, index: number)=>{
            if(elem.id === arg.id){
                this.listOfBoxs[index] = arg;
            }
        });
        this.showForm = false;

    }
}