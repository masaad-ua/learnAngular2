import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Box } from  '../shared';

@Injectable()
export default class ListOfBoxes{
    arr: Box[] = [];
    arrFeed: Observable<Box>;

    private arrObserver: any;
    private dataUrl = '/app/shared/data/list-boxs.json';

    constructor(private http: Http){
        this.arrFeed = new Observable(observer => {
            this.arrObserver = observer;
            //console.log(observer)

        });
        this.fetchArr();
    }

    private fetchArr():void {
        this.http.get(this.dataUrl)
            .map(response => response.json())
            .map(stream => stream.map(res=>{

                return{
                    id: res.id,
                    title: res.title,
                    color: res.color,
                    wasEdited: res.wasEdited
                }
            }))
            .subscribe(
                arrs => {
                    this.arr = arrs;
                    //console.log(this.arr);
                    arrs.forEach(elem => this.arrObserver.next(elem))
                },
                error => console.log(error)
            )
    }

}
