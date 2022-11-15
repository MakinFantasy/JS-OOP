const types = {
  Bowman: {
    attack: 25,
    defence: 25,
  },
  Swordsman: {
    attack: 40,
    defence: 10,
  },
  Magician: {
    attack: 10,
    defence: 40,
  },
  Undead: {
    attack: 25,
    defence: 25,
  },
  Zombie: {
    attack: 40,
    defence: 10,
  },
  Daemon: {
    attack: 10,
    defence: 40,
  },
};

export default class Character {
  constructor(name, type) {
    if (name.length >= 2 && name.length <= 10) {
      this.name = name;
    } else {
      throw new Error();
    }

    if (type in types) {
      this.type = type;
      this.attack = types[type].attack;
      this.defence = types[type].defence;
    } else {
      throw new Error();
    }
    this.health = 100;
    this.level = 1;
  }

  levelUp () {
    if (this.health === 0) {
      throw new Error();
    } else {
      this.level += 1;
      this.health = 100;
      const attackMultiplier = this.attack * 0.2;
      const defenceMultiplier = this.defence * 0.2;
      this.attack += attackMultiplier;
      this.defence += defenceMultiplier;
    }
  }

  damage(points) {
    if (this.health >= 0) {
      this.health -= points * (1 - this.defence / 100);
    } else {
      throw new Error();
    }
  }
}
