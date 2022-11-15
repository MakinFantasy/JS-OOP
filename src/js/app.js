import bowman from './Bowman.js';
import swordsman from './Swordsman.js';
import magician from './Magician.js';
import daemon from './Daemon.js';
import undead from './Undead.js';
import zombie from './Zombie.js';

const characterList = [bowman, swordsman, magician, daemon, undead, zombie];
for (const character of characterList) {
  console.log(character);
  console.log("NEXT CHARACTER\n")
}
