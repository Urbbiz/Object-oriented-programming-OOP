import { Bird } from '../Bird/Bird.js';
class Chicken extends Bird {
    constructor (name, color, fly){
        super(name, color, fly)
        this.voice = 'cip cip';
        this.canFly = false;
        

} 

sound() {
    console.log(`${name}: ${this.voice}`);

}
fly() {
    console.log(`${name}: ${this.canFly ? 'Flies away' : 'Oops... I can not fly'}`);
}
}
export {Chicken}