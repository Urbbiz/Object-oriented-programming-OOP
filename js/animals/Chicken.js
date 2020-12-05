import { Bird } from './Bird.js';

class Chicken extends Bird {
    constructor(name, color, dedekle) {
        super(name, color);

        this.voice = 'Cip cip 🐥🐥';
        this.canFly = false;
        this.dedekle = dedekle;
    }
}

export { Chicken }