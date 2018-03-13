import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { List } from  '../shared';

@Injectable()
export default class ListOfAllLetters{
    arr: List[] = [];
    arrFeed: Observable<List>;

    private arrObserver: any;
    private dataUrl = '/app/shared/data/list-letters.json';

    constructor(private http: Http){
        this.arrFeed = new Observable(observer => {
            this.arrObserver = observer;
        });
        this.fetchArr();
    }

    private fetchArr():void {
        this.http.get(this.dataUrl)
            .map(response => response.json())
            .map(stream => stream.map(res=>{
                return{
                    name: res.name,
                    address: res.address,
                    text: res.text,
                    inbox: res.inbox,
                    read: res.read,
                    trash:res.trash,
                    id: res.id,
                    date: res.date
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
    //addList(list: List): void {
    //    this.arrObserver.next(list);
    //}

}
