import { Injectable } from '@angular/core';
import { List } from  '../shared'

@Injectable()
export default class ListOfAllLetters{
    public arr: Array<List> = [];
    constructor(){
        this.arr = [
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
