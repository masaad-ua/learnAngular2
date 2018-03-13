import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export default class ListOfUsers{
    users: any[] = [];
    usersFeed: Observable<any>;

    private userObserver: any;


    private dataUrl = '/app/shared/data/list-users.json';
    private dataLocal = localStorage.getItem("users");

    constructor(private http: Http){
        this.usersFeed = new Observable(observer => {
            this.userObserver = observer;
        });
        this.fetchUsers();
    }

    private fetchUsers():void {
        this.http.get(this.dataUrl)
            .map(response => response.json())
            .map(stream => stream.map(res=>{
                return{
                    name: res.name,
                    secondName: res.secondName,
                    id: res.id,
                    image: res.image
                }
            }))
            .subscribe(
                arrs => {
                    this.users = arrs;
                    //console.log(this.users);
                    arrs.forEach(elem => this.userObserver.next(elem))
                },
                error => console.log(error)
            )
    }
    //addList(list: List): void {
    //    this.arrObserver.next(list);
    //}

}
