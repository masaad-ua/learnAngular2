import List from './interfaces/List';
import ListOfAllLetters from './services/list-of-letters.service';
import AuthenticationService from './services/authentication.service';

const SHARED_PROVIDERS: any[] = [
    ListOfAllLetters,
    AuthenticationService
];

export {
    List,
    ListOfAllLetters,
    AuthenticationService,
    SHARED_PROVIDERS
};