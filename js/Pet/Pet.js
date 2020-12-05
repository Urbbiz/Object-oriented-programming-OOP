import{Animal} from '../Animal.js';

class Pet extends Animal {
    constructor(name, furColor, legCount, likePlaying, walk) {
        super(name, furColor)
        this.legCount = legCount;
        this.likePlaying = likePlaying;
        this.loyal = false; 
        // this.walk = walk;
      
    }
}

export{ Pet}