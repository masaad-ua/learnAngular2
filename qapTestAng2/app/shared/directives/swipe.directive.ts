import { Input, Directive, HostListener, ElementRef, ViewChild, Output, EventEmitter } from '@angular/core';

@Directive({
    selector: '[swipe-listener]'
})

export default class  SwipeListener{

    startX: any;
    currentXCoordinate: number = 0;
    drage: boolean = false;
    currentTime: number;
    startTime: number;
    element: any;
    elem: any;
    @Output() itWasSwiped: EventEmitter<any> = new EventEmitter();



    //constructor(){
    //    this.swiped = true;
    //}


    //@ViewChild('someVar') el:ElementRef;
    //ngAfterViewInit()
    //{
    //    console.log(this.el.nativeElement);
    //}




    createEvent(element: any, eventName: string):void{

        if(document.implementation.hasFeature("CustomEvent", "3.0")){
            let event = document.createEvent("CustomEvent");
            event.initCustomEvent(eventName, true, false, eventName);
            element.dispatchEvent(event);
        }
        //console.log(eventName);

    }

    @HostListener('rightswipe', ['$event'])onRightSwipe(e){
        this.itWasSwiped.emit(false);

    }
    @HostListener('leftswipe', ['$event'])onLeftSwipe(e){
        this.itWasSwiped.emit(true);
    }


    @HostListener('mousedown', ['$event']) onMouseDown(e){
        this.startX = e.pageX;
        this.startTime = Date.now();
        this.drage = true;
    }



    @HostListener('mouseup', ['$event','$target']) onMouseUp(e){

        this.elem = document.getElementById('listContainer');

      if(this.drage){
          this.currentXCoordinate = e.pageX - this.startX;
          this.currentTime = Date.now() - this.startTime;
          //if(this.currentTime < 400){
          if(this.currentTime){
              (this.currentXCoordinate > 100) && this.createEvent(this.elem, "rightswipe");
              (this.currentXCoordinate < -10) && this.createEvent(this.elem, "leftswipe");
          }
          this.drage = false;

      }
    }



}




