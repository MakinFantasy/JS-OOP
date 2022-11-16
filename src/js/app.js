import Bowman from "./Bowman.js";
import Daemon from './Daemon.js';
import Swordsman from './Swordsman.js';
import Magician from './Magician.js';
import Zombie from './Zombie.js'
import Undead from './Undead.js'

const bowman = new Bowman('Antonio')
const swordsman = new Swordsman('Nikita')
const magician = new Magician('Vanes')
const daemon = new Daemon('Red')
const undead = new Undead('Yura')
const zombie = new Zombie('Levon')

const charactersDefault = [bowman, swordsman, magician, daemon, undead, zombie]


for (const character of charactersDefault) {
  console.log(character)
}

charactersDefault[1].levelUp()
charactersDefault[1].damage(50)
console.log(charactersDefault[1])
