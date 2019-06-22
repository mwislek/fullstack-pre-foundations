/* eslint-disable no-unused-vars, no-throw-literal*/
function Pokemon(name, health, attackBonus) {
  this.name = name;
  this.health = health;
  this.attackBonus = attackBonus;
}

Pokemon.prototype.biteAttack = function() {
  return this.attackBonus + 2;
}

Pokemon.prototype.isDefeated = function() {
  return this.health < 1;
}

function simulateBattle(combatant1, combatant2, winner) {
  return '';
}
