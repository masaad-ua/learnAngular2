import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Element } from  '../shared';

@Injectable()
export default class GetLists{
    arr: Element[] = [];
    arrFeed: Observable<Element>;

    private arrObserver: any;
    private dataUrl = '/app/shared/data/elements.json';

    constructor(private http: Http){
        this.arrFeed = new Observable(observer => {
            this.arrObserver = observer;
            console.log(observer)
        });
        this.fetchArr();
    }

    private fetchArr():void {
        this.http.get(this.dataUrl)
            .map(response => response.json())
            .map(stream => stream.map(res=>{
                return{
                    group: res.group,
                    id: res.id,
                    name: res.name,
                    address: res.address,
                    checked: res.checked
                }
            }))
            .subscribe(
                arrs => {
                    this.arr = arrs;
                    arrs.forEach(elem => this.arrObserver.next(elem))
                },
                error => console.log(error)
            )
    }


}
