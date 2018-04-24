import tape from 'tape';
import calculateDPS, { getDamageData } from '../src/reducers/PathOfExileReducer';

const testData = `Rarity: Rare
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

tape('assert that physcial damage was obtained', function(t) {
  const testDamageData = getDamageData(testData);
  t.equal(testDamageData.physicalDamage[0], '141', 'get damage data returns min physical damage');
  t.equal(testDamageData.physicalDamage[1], '241', 'get damage data returns max physical damage');
  t.equal(testDamageData.elementalDamage[0], '4', 'get damage data returns first min elemental damage');
  t.equal(testDamageData.elementalDamage[1], '75', 'get damage data returns first max elemental damage');
  t.equal(testDamageData.chaosDamageRegEx[0], '', 'get damage data returns min chaos damage');
  t.equal(testDamageData.chaosDamageRegEx[1], '', 'get damage data returns max chaos damage');
  t.equal(testDamageData.attacksPerSecondRegEx[0], '1.88', 'get damage data returns attacks per second');
  t.end();
  //calculateDPS(testData);
});
