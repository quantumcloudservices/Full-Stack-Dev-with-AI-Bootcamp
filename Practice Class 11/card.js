class Card{
    tapped = false;
    constructor(name, color, atk, def){
        this.name = name;
        this.color = color;
        this.atk = atk;
        this.def = def;
    }
}

const thornElemental = new Card('TE', 'green', 7, 7);
thornElemental.tapped = true;
