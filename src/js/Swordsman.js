import Character from './Character.js';

class Swordsman extends Character {
  constructor(name, type) {
    super(name, type);
  }
}

const swordsman = new Swordsman('Character2', 'Swordsman');
export default swordsman;
