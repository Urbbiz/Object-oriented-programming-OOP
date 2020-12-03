import { Animal} from '../Animal.js';
class Bird extends Animal {
    constructor(name, color, wingCounts, fly){
        super(name)
        this.color = color;
        this.wingCounts = wingCounts;
        this.fly = fly;
    }
}
export {Bird}