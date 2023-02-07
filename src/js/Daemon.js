import {Character} from "./Character";

export class Daemon extends Character{
    constructor(...args) {
        super(args);
        this.type = 'Daemon';
    }
}