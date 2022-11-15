import Character from './Character.js';

class Daemon extends Character {
  constructor(name, type) {
    super(name, type);
  }
}

const daemon = new Daemon('Character4', 'Daemon');
export default daemon;
