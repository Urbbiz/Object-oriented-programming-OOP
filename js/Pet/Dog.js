import { Pet } from './Pet.js';

class Dog extends Pet {
    constructor(name, furColor, legCount, likePlaying, walk) {
        super(name, furColor, legCount,likePlaying, walk);

        this.voice = 'Bark bark! 🐕🐕';
    }
}

export { Dog }