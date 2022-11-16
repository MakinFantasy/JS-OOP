import Character from './Character.js';

export default class Zombie extends Character {
  constructor(name, type='Zombie') {
    super(name, type);
    this.health = 100;
    this.level = 1;
    this.attack = 40;
    this.defence = 10;
  }
}
