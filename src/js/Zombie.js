import Character from './Character.js';

class Zombie extends Character {
  constructor(name, type) {
    super(name, type);
  }
}

const zombie = new Zombie('Character6', 'Zombie');
export default zombie;
