interface Player {
    name: string;
    playerType: string;
    weapon: null | Weapon;
}

interface Weapon {
    name: string;
    attackPower: number;
}

// const player: Player = {
//     name: "Manny Saenz",
//     playerType: "Warrior",
//     weapon: null
// };

//or

class PlayerClass implements Player {
    name: string;
    playerType: string;
    weapon: null | Weapon = null;

    constructor(name: string, playerType: string, weapon: null | Weapon = null) {
        this.name = name;
        this.playerType = playerType;
        this.weapon = weapon;
    }
    
    giveWeapon(weapon: Weapon | null) {
        this.weapon = weapon;
        if (this.weapon === null) {
            console.log(`This player has no weapon equipped.`);
            return;
        }
        if(!!this.weapon) {
            console.log(`This player has a ${this.weapon.name} equipped with an attack power of ${this.weapon.attackPower}.`);
        }
    }
}

const Manuel = new PlayerClass("Manuel", "Warrior");
const AR = new PlayerClass("AR", "Archer");
const masterSword: Weapon = {
    name: "Master Sword", 
    attackPower: 500
}

Manuel.giveWeapon(masterSword);

function fight(p1: Player, p2: Player) {
    const fullAttackPower1 = p1.weapon ? p1.weapon.attackPower : 0;
    console.log(p1.name + 'damaged' + p2.name + 'with' + fullAttackPower1 + 'points of damage');
}

fight(Manuel, AR)