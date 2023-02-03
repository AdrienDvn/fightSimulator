// console.log("JS is loaded");

class Character {
  constructor(pseudo, characterType ,health, damage) {
    this.pseudo         = pseudo;
    this.characterType  = characterType;
    this.health         = health;
    this.damage         = damage;
    this.level          = 1;
  }

  get info () {
    return this.pseudo +' the '+ this.characterType + ' has ' + this.health + " life points and is at level " + this.level
  }

  evolve() {
      this.level += 1;
      console.log(this.pseudo + " upgrades to level " + this.level);
  }

  checkHealth() {
    if(this.health <= 0) {
      this.health = 0;
      console.log(this.pseudo + " has lost !");
    }
  }
}



class Magician extends Character {
  constructor(pseudo){
    super(pseudo, "magician", 170, 90);
  }

  attack(character) {
    character.health -= this.damage;
    console.log(this.pseudo + " attacks " + character.pseudo + " by throwing a sortilege of "+ this.damage + " damage");

    this.evolve();
    character.checkHealth();
  }

  specialAttack(character) {
    character.health -= this.damage * 5;
    console.log(this.pseudo + " attacks with special attack " + character.pseudo + ' ('+ this.damage * 5 + " damage" +')');
    character.checkHealth();
  }
}


class Warrior extends Character {
  constructor(pseudo){
    super(pseudo, "warrior", 350, 50);
  }

  attack(character) {
    character.health -= this.damage;
    console.log(this.pseudo + " attacks " + character.pseudo + " with his sword "+ '(' +this.damage + " damage)");

    this.evolve();
    character.checkHealth();
  }

  specialAttack(character) {
    character.health -= this.damage * 5;
    console.log(this.pseudo + " attacks with special war axe " + character.pseudo + '('+ this.damage * 5 + "damage" +')');
    character.checkHealth();
  }
}

//character examples
var gandalf = new Magician('Gandalf');
var thor    = new Warrior('Thor');

//scenario example
console.log(thor.info);
console.log(gandalf.info);

gandalf.attack(thor);
console.log(thor.info);

thor.attack(gandalf);
console.log(gandalf.info);
gandalf.specialAttack(thor);
