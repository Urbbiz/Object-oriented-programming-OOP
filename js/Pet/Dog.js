import { Pet } from './Pet.js';

class Dog extends Pet {
    constructor(name, furColor, legCount, likePlaying, walk) {
        super(name, furColor, legCount,likePlaying, walk);

        this.voice = 'Bark bark! 🐕🐕';
        this.loyal = true;
        this.likePlayingWithBall = true;
    }
}

export { Dog }