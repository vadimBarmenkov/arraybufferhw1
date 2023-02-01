export class Magician {
    constructor(name) {
        this.name = name;
        this.type = 'Magician';
        this.stoned = false;
    }

    getAttack(numberOfCells){
        if(this.stoned){
            return this.attack - Math.log2(numberOfCells) * 5 - (this.attack * (numberOfCells - 1) * 0.1);
        }else {
            return this.attack - (this.attack * (numberOfCells - 1) * 0.1);
        }
    }

    setAttack(attackPower){
        this.attack = attackPower;
    }

    setStoned(stoned){
        this.stoned = stoned;
    }

    getStoned(){
        return this.stoned;
    }
}