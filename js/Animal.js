class Animal {
    constructor(name, furColor) {
        this.name = name;
        this.fur = furColor;
    }

    introduce() {
        console.log(`Labas, as esu ${this.name} ir mano kailis yra ${this.fur} spalvos. As turiu ${this.legCount} kojas ir ${this.likePlaying} zaisti`);
    }
        introduceFish(){
            console.log(`Labas, as esu ${this.name} ir mano zvynai yra ${this.fin} spalvos. As ${this.swim}`);
    }
    introduceBird(){
        console.log(`Labas , as esu ${this.name} ir as esu ${this.color}, turiu ${this.wingCounts} sparnus. As ${this.fly}`)
    }

    sound() {
        console.log(`${this.name}: ${this.voice}`);
    }


}

export { Animal }