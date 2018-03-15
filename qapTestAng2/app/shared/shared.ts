import Element from './interfaces/element';
import GetLists from './services/get-lists.service';
import SwipeListener from './directives/swipe.directive';


const SHARED_PROVIDERS: any[] = [
    GetLists,

];

const SHARED_DIRECTIVES: any[] = [
    SwipeListener
];

export {
    SHARED_PROVIDERS,
    GetLists,
    SHARED_DIRECTIVES,
    SwipeListener,

    Element
};