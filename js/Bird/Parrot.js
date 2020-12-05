import { Bird } from './Bird.js';
class Parrot extends Bird {
    constructor(name, color, wingCounts, fly){
        super(name, color,wingCounts,fly)
        this.voice = 'Macaw macaw';
        this.canFly = true;

} 

sound() {
    console.log(`${name}: ${this.voice}`);
}

fly() {
    console.log(`${name}: ${this.canFly}`);
}

repeatSound(sound) {
    console.log(`${this.name} repeat the sound: ${sound}`);
}
    
} 
export {Parrot}