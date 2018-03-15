import { ListOfAllLetters } from '../shared/shared';
import {Directive, Input, HostListener} from '@angular/core';

@Directive({
    selector:'[data-id]'
})

export default class ShowDate{
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
