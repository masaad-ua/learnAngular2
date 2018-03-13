import Box from './interfaces/box';
import ListOfBoxes from './services/list-of-boxes.service';

const SHARED_PROVIDERS: any[] = [
    ListOfBoxes
];

export {
    Box,
    ListOfBoxes,
    SHARED_PROVIDERS
};