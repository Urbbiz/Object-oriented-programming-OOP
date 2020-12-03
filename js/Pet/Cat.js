import { Pet } from './Pet.js';

class Cat extends Pet {
    constructor(name, furColor, legCount, likePlaying) {
        super(name, furColor, legCount, likePlaying);

        this.voice = 'Miau miau! 🐱🐱';
    }
}

export { Cat }
