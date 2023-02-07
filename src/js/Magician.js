import {Character} from "./Character";

export class Magician extends Character{
    constructor(...args) {
        super(args);
        this.type = 'Magician';
    }
}