import Character from './Character.js';

export default class Magician extends Character {
  constructor(name, type='Magician') {
    super(name, type);
    this.health = 100;
    this.level = 1;
    this.attack = 10;
    this.defence = 40;
  }
}
