import List from './interfaces/List';
import ListOfAllLetters from './services/list-of-all-letters.service';

const SHARED_PROVIDERS: any[] = [
    ListOfAllLetters
];

export {
    List,
    ListOfAllLetters,
    SHARED_PROVIDERS
};