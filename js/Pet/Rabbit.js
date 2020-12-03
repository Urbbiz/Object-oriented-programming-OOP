import { Pet } from './Pet.js';

class Rabbit extends Pet {
    constructor(name,furColor, legCount, likePlaying, walk){
        super(name, furColor, legCount, likePlaying, walk)
this.voice = 'crack crack!!!!'

    }
}

export {Rabbit}