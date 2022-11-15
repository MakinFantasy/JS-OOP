import Character from './Character.js';
import { buildPresetChain } from '@babel/core/lib/config/config-chain.js';

class Bowman extends Character {
  constructor(name, type) {
    super(name, type);
  }
}

const bowman = new Bowman('Character1', 'Bowman');
bowman.levelUp();
bowman.damage(50);
export default bowman;
