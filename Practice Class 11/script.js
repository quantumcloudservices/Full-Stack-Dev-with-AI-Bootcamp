const human = {
    name: 'Jon El',
    planet: 'Krypton',
};

console.log(human['name']);

console.log(human.name);

const car = {};

car.wheels = 4;

const human1 = {
    name: 'Jon El',
    planet: 'Krypton',
    superHuman: 'True',
}

class Troll {
    health = 100;
    constructor(mana, name, speak) {
        this.mana = mana;
        this.name = name;
        this.speak = speak;
    }
    onSpeak(){
        console.log(this.speak);
    }
    attack(troll){
        troll.health -=5;
    }
}

const Harry = new Troll(150, 'Harry', 'Im a what???');
const Gandolf = new Troll(2000, 'The White', 'Youre a Troll Harry!!!');

Harry.onSpeak();
Gandolf.onSpeak();
Harry.attack(Gandolf);
console.log(Gandolf.health);
Gandolf.attack(Harry);