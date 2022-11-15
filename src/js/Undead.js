import Character from './Character.js';

class Undead extends Character {
  constructor(name, type) {
    super(name, type);
  }
}

const undead = new Undead('Character5', 'Undead');
export default undead;
