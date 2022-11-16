import Character from './Character.js';

export default class Bowman extends Character {
  constructor(name, type='Bowman') {
    super(name, type);
    this.health = 100;
    this.level = 1;
    this.attack = 25;
    this.defence = 25;
  }
}
