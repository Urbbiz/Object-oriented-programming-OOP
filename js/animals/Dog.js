import { Pet } from './Pet.js';

class Dog extends Pet {
    constructor(name, furColor) {
        super(name, furColor);

        this.voice = 'Bark bark! 🐕🐕';
        this.loyal = true;
        this.likesPlayingWithBall = true;
    }
}

export { Dog }