import {Component, OnInit, ViewEncapsulation, Input, Output, EventEmitter} from "@angular/core"
import {Element, GetLists} from '../shared/shared';

@Component({
    selector: "lists",
    directives: [],
    templateUrl : 'app/lists/lists.component.html',
    styleUrls: ['app/lists/lists.component.css']
})



export default class ListsComponent {
    public listOfItems: Array<Element> = [];
    arrayOfLists: Array<Element> = [];
    //arrayOfCheckedItem: Array<Element> = [];

    amountOfList1: number = 32;
    amountOfList2: number = 32;
    amountOfList3: number = 5;

    chose: string;
    @Input() arrayOfCheckedItem:  Array<Element> = [];
    @Output() sendArrayOfCheckedItems: EventEmitter<any> = new EventEmitter();

    constructor( private arrayGetLists: GetLists){
            this.chose = "add all";
    }




    ngOnInit(): void {

        this.arrayGetLists.arrFeed.subscribe(newItem =>{
            this.listOfItems.push(newItem);
        });

        setTimeout(()=>{
            this.createArrayOfLists(this.amountOfList1, 1);
            this.createArrayOfLists(this.amountOfList2, 2);
            this.createArrayOfLists(this.amountOfList3, 3);

            //console.log(this.arrayOfLists);
        },0);

    }


    updateArrayOfCheckedItem():void{
        console.log("send");
        this.sendArrayOfCheckedItems.emit("got it");
    }

    createArrayOfLists(amountItems: number, idItems:number): void{
        let obj: any = null,
            arr: any = [];

        if(this.listOfItems.length > 0){
            this.listOfItems.forEach((elem: any, index: number, arr: Array<any>)=>{
                if(elem.group === idItems) {
                    obj = elem;
                }
            });
        }

        for(var i = 0; i < amountItems; ++i){
            var item  = JSON.parse(JSON.stringify(obj));
            item.id = i + 1;
            arr.push(item);
        }

        this.arrayOfLists.push(arr);

    }


    check(i, j): void{
        this.arrayOfLists[i][j].checked = !this.arrayOfLists[i][j].checked;

        this.arrayOfLists[i][j].checked && this.arrayOfCheckedItem.push(this.arrayOfLists[i][j]);
        (!this.arrayOfLists[i][j].checked) &&  this.arrayOfCheckedItem.splice(this.arrayOfCheckedItem.indexOf(this.arrayOfLists[i][j]), 1);

        //console.log(this.arrayOfCheckedItem);

        //this.updateArrayOfCheckedItem();

        //(!this.arrayOfLists[i][j].checked) && this.arrayOfCheckedItem.splice(this.arrayOfLists[i][j])
        this.updateArrayOfCheckedItem();
    }

    chooseAll(arg):void {

        console.log(this.arrayOfLists[arg] instanceof Array);
        var arr: any = this.arrayOfLists[arg];

        if(this.chose === "add all"){
            arr.forEach((item: Element, i: number)=>{
                this.arrayOfLists[arg][i].checked = true;
                !this.arrayOfCheckedItem.indexOf(this.arrayOfLists[arg][i]) && this.arrayOfCheckedItem.push(this.arrayOfLists[arg][i]);
            });
            this.chose = "remove all"

        }
        else if(this.chose === "remove all"){
            arr.forEach((item: Element, i: number)=>{
                this.arrayOfLists[arg][i].checked = !this.arrayOfLists[arg][i].checked;
                this.arrayOfCheckedItem.push(this.arrayOfLists[arg][i]);

            });
            this.chose = "remove all"
        }


        console.log(this.arrayOfLists[arg]);

    }



}