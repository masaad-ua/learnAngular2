import {Component, OnInit } from '@angular/core';
import { NgControlGroup, NgFormModel, Control, ControlGroup, FormBuilder, Validators } from '@angular/common';
import  ListOfUsers  from './users.services'
import{Router,
    ROUTER_DIRECTIVES,
    ComponentInstruction,
    CanActivate,
    OnActivate,
    CanDeactivate,
    OnDeactivate,} from '@angular/router-deprecated';



@Component({
    selector:'user-list',
    providers: [ListOfUsers, FormBuilder],
    templateUrl: 'app/users/users.component.html',
    styleUrls: ['app/users/users.component.css']
})

export default class UserComponent implements OnActivate, CanDeactivate, OnDeactivate {
    users: any[] = [];
    userData: any;
    changesSaved: boolean;

    //name: Control;
    //username: Control;
    userForm: ControlGroup;

    constructor(private listOfUsers: ListOfUsers, private router: Router, formBuilder: FormBuilder ) {
        this.userData = <any> {};

        //this.name = new Control('', Validators.required);
        //this.username = new Control('', Validators.required);
        //
        //this.userForm = formBuilder.group({
        //    name: this.name,
        //    cred: formBuilder.group({
        //        username: this.username
        //    })
        //})

        this.userForm = formBuilder.group({
            name: formBuilder.control('', Validators.required),
            credentials: formBuilder.group({
                username: formBuilder.control('', Validators.required),
                password: formBuilder.control('', Validators.required)
            })
        })
    }





    //saveUser(arg: NgControlGroup):void {
    //    //this.router.navigate(['MailServerComponent']);
    //    this.changesSaved = true;
    //    console.log(arg.control.value.nameControlsGroup.nameA);
    //
    //
    //}

    saveUser(arg):void {
    }


    submitNewUsers(arg: NgControlGroup): void{
        console.log(arg)
    }
    ngOnInit():void {
        this.listOfUsers.usersFeed.subscribe(newItem =>{
            if(newItem){
                this.users.push(newItem);
            }
        });
    }
    routerOnActivate() {
        console.log('Welcome to the User Form!');
    }
    routerCanDeactivate() {
        return this.changesSaved ||
            confirm ('Are you sure you want to leave?');
    }
    routerOnDeactivate() {
        console.log('My Angular 2 Pomodoro Timer');
    }

}
