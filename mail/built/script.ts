import { Component, NgModule, Output, EventEmitter, Input, Pipe, PipeTransform, Directive, OnInit, HostListener} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';



interface List{
    name: string,
    address: string,
    text: string,
    inbox: boolean,
    read: boolean,
    trash: boolean,
    id: number,
    date: string
}

class listOfAllLetters{
    public listOfAllLetter: Array<List> = [];
    constructor(){
        this.listOfAllLetter = [
            {
                name: "Jastin Biber",
                address: "jasnin@mail.ru",
                text:`Каждый веб-разработчик знает, что такое текст-«рыба».
                          Текст этот, несмотря на название, не имеет никакого отношения к обитателям водоемов.`,
                inbox: true,
                read: true,
                trash: false,
                id: 1,
                date: "Jun 23 2015"
            },
            {
                name: "Brendon Aik",
                address: "brendon@mail.ru",
                text:`Не следует, однако забывать, что реализация намеченных плановых заданий в значительной степени
                            обуславливает создание позиций, занимаемых участниками в отношении поставленных задач.`,
                inbox: false,
                read: true,
                trash: false,
                id: 2,
                date: "Jun 20 2015"

            },
            {
                name: "Duglas Crokford",
                address: "crokford@mail.ru",
                text:` Q анимаемых участниками в отношении поставленных задач. занимаемых участниками в отношении поставленных задач. `,
                inbox: true,
                read: false,
                trash: false,
                id: 3,
                date: "Jun 21 2015"

            },
            {
                name: "Maksym Osypchuk",
                address: "osypchuk@mail.ru",
                text:` С другой стороны укрепление и развитие структуры влечет за собой процесс внедрения и модернизации позиций,
                            занимаемых участниками в отношении поставленных задач.`,
                inbox: false,
                read: false,
                trash: false,
                id: 4,
                date: "Jun 22 2015"

            },
            {
                name: "Aleksandr Duma",
                address: "duma@mail.ru",
                text:` Значимость этих проблем настолько очевидна, что дальнейшее развитие различных форм деятельности в значительной степени обуславливает создание систем массового участия.
                            Разнообразный и богатый опыт постоянный количественный рост и сфера нашей активности в значительной степени обуславливает создание новых предложений.`,
                inbox: true,
                read: true,
                trash: true,
                id: 5,
                date: "Jun 23 2015"
            }
        ];

    }

}



@Directive({
    selector:'[data-id]'
})
class ShowDate{
    private  dateLast: string;
    @Input() dateLetter: any;
    @Input() dateLetterShow: any;

    @HostListener('mouseover')
    onMouseOver() {
        //console.log(this.dateLetter);
        this.dateLast = this.dateLetterShow.innerHTML;
        this.dateLetterShow.innerHTML = this.dateLetter;
    }
    @HostListener('mouseout')
    onMouseOut() {
        this.dateLetterShow.innerHTML = this.dateLast;
    }
}


@Component({
    selector: 'button-list',
    templateUrl: '/built/button-list.html',

}
)
class ButtonListComponent{
    buttonArray: string[] = ["inbox","read", "unread", "outbox", "trash"];
    @Output() buttonWasClicked: EventEmitter<any> = new EventEmitter();

    // Послать событие
    clickButton(arg): void{
        this.buttonWasClicked.emit(arg);
    }
}




@Component({
    selector: 'mail-server',
    directives: [ButtonListComponent,ShowDate],
    templateUrl: '/built/mail-server.html'
    //styleUrls: ['built/mail-server.css'],

    //encapsulation: ViewEncapsulation.Emulated
})

class MailServerComponent{
    listOfCurrentLetter: Array<List> = [];
    listOfAllLetter: Array<List> = [];
    textLetter: string;
    showFieldOfLetter: boolean;

    constructor(){
        const list: listOfAllLetters = new listOfAllLetters();
        this.listOfAllLetter = list.listOfAllLetter;
        this.changeList("inbox");
    }


    changeList(arg:string): void {

            this.showFieldOfLetter = false;
            this.listOfCurrentLetter = this.listOfAllLetter.filter((elem: any, index: number, arr: Array<any>)=>{
                switch (true){
                    case (arg === "read" || arg === "inbox" && elem.trash === false):
                        return (elem[arg] === true && elem.trash === false);
                        break;
                    case (arg === "unread" && elem.trash === false):

                        return (elem.read === false && elem.trash === false);
                        break;
                    case (arg === "outbox" && elem.trash === false):
                        return (elem.inbox === false && elem.trash === false);
                        break;
                    case (arg === "trash" && elem.trash === true):

                        return (elem[arg] === true);
                        break;
                }
            });
    }

    readThisLetter(i:number):void{

       this.listOfAllLetter.forEach((elem: any, index: number, arr: Array<any>)=>{
            if(elem.id === i){
                this.textLetter = elem.text;
            }
        });

        this.showFieldOfLetter = true;



    }
}


// Main module, bootstrapping PomodoroTimerComponent as root component
@NgModule({
    imports: [BrowserModule],
    providers: [listOfAllLetters],
    declarations: [
        ShowDate,
        ButtonListComponent,
        MailServerComponent
    ],
    bootstrap: [MailServerComponent],
})
export class AppModule { }

// Application bootstrap (specific for browser environments)
const platform = platformBrowserDynamic();
platform.bootstrapModule(AppModule);