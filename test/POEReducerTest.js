import tape from 'tape';
import calculateDPS, { getDamageData } from '../src/reducers/PathOfExileReducer';

const testDataWithSingleElementalDamageProperty = `Rarity: Rare
Dire Mangler
Siege Axe
--------
One Handed Axe
Quality: +20% (augmented)
Physical Damage: 141-241 (augmented)
Elemental Damage: 4-75 (augmented)
Critical Strike Chance: 6.65% (augmented)
Attacks per Second: 1.88 (augmented)
Weapon Range: 9
--------
Requirements:
Level: 68
Str: 151
Dex: 82
Int: 105
--------
Sockets: R-B-R
--------
Item Level: 76
--------
151% increased Physical Damage
Adds 4 to 75 Lightning Damage
25% increased Attack Speed
33% increased Critical Strike Chance
+213 to Accuracy Rating
Adds 14 to 19 Physical Damage
`;

const testDataWithMultipleElementalDamageProperties = `Rarity: Rare
Dire Mangler
Siege Axe
--------
One Handed Axe
Quality: +20% (augmented)
Physical Damage: 141-241 (augmented)
Elemental Damage: 4-75 (augmented), 34-75 (augmented), 123-187 (augmented)
Critical Strike Chance: 6.65% (augmented)
Attacks per Second: 1.88 (augmented)
Weapon Range: 9
--------
Requirements:
Level: 68
Str: 151
Dex: 82
Int: 105
--------
Sockets: R-B-R
--------
Item Level: 76
--------
151% increased Physical Damage
Adds 4 to 75 Lightning Damage
25% increased Attack Speed
33% increased Critical Strike Chance
+213 to Accuracy Rating
Adds 14 to 19 Physical Damage
`;

tape('assert that damage stats were obtained', function(t) {
  const testDamageData = getDamageData(testDataWithSingleElementalDamageProperty);
  const calculateDPSData = calculateDPS(null, null, testDataWithSingleElementalDamageProperty);
  t.equal(testDamageData.physicalDamage[0], '141', 'get damage data returns min physical damage');
  t.equal(testDamageData.physicalDamage[1], '241', 'get damage data returns max physical damage');
  t.equal(testDamageData.elementalDamage[0], '4', 'get damage data returns first min elemental damage');
  t.equal(testDamageData.elementalDamage[1], '75', 'get damage data returns first max elemental damage');
  t.notOk(testDamageData.chaosDamage[0], 'get damage data returns min chaos damage');
  t.notOk(testDamageData.chaosDamage[1], 'get damage data returns max chaos damage');
  t.equal(testDamageData.attacksPerSecond[0], '1.88', 'get damage data returns attacks per second');
  t.equal(calculateDPSData.physical, 359, 'calculateDPS.physical returns physical damage per second');
  t.equal(calculateDPSData.elemental[0], 74, 'calculateDPS.elemental[0] returns elemental damage per second');
  t.notOk(calculateDPSData.elemental[1], 'calculateDPS.elemental[1] returns elemental damage per second');
  t.notOk(calculateDPSData.elemental[2], 'calculateDPS.elemental[2] returns elemental damage per second');
  t.notOk(calculateDPSData.chaos, 'calculateDPS.chaos returns chaos damage per second');
  t.end();
  //calculateDPS(testData);
});

tape('assert that all elemental damage stats were obtained', function(t) {
  const testDamageData = getDamageData(testDataWithMultipleElementalDamageProperties);
  const calculateDPSData = calculateDPS(null, null, testDataWithMultipleElementalDamageProperties);
  t.equal(testDamageData.physicalDamage[0], '141', 'get damage data returns min physical damage');
  t.equal(testDamageData.physicalDamage[1], '241', 'get damage data returns max physical damage');
  t.equal(testDamageData.elementalDamage[0], '4', 'get damage data returns first min elemental damage');
  t.equal(testDamageData.elementalDamage[1], '75', 'get damage data returns first max elemental damage');
  t.equal(testDamageData.elementalDamage[4], '34', 'get damage data returns second min elemental damage');
  t.equal(testDamageData.elementalDamage[5], '75', 'get damage data returns second max elemental damage');
  t.equal(testDamageData.elementalDamage[7], '123', 'get damage data returns third min elemental damage');
  t.equal(testDamageData.elementalDamage[8], '187', 'get damage data returns third max elemental damage');
  t.notOk(testDamageData.chaosDamage[0], 'get damage data returns min chaos damage');
  t.notOk(testDamageData.chaosDamage[1], 'get damage data returns max chaos damage');
  t.equal(testDamageData.attacksPerSecond[0], '1.88', 'get damage data returns attacks per second');
  t.equal(calculateDPSData.physical, 359, 'calculateDPS.physical returns physical damage per second');
  t.equal(calculateDPSData.elemental[0], 74, 'calculateDPS.elemental[0] returns elemental damage per second');
  t.equal(calculateDPSData.elemental[1], 102, 'calculateDPS.elemental[1] returns elemental damage per second');
  t.equal(calculateDPSData.elemental[2], 291,  'calculateDPS.elemental[2] returns elemental damage per second');
  t.notOk(calculateDPSData.chaos, 'calculateDPS.chaos returns chaos damage per second');
  t.end();
  //calculateDPS(testData);
});
