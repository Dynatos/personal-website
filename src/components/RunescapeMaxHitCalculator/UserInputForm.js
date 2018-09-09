import React, { Component } from 'react';
import EquipmentSelector from "./EquipmentSelector";
import calculateMaxHit, { checkDharoks, checkDragonBattleaxe, checkMeleeOrRange } from '../../../scripts/calculateMaxHitCapsule';

export default class UserInputForm extends Component {
  
  
  // renderMaxHitPrayer contains all the information required to create the drop down menu of options
  // returns a fieldset (HTML tag) containing all the option(s) (HTML tag) that the player has available in-game
  renderMaxHitPrayer() {
    const prayerOptionObjects = [
      {value: 'false', children: 'None'},
      {value: 'burst_of_strength', children: 'Burst of Strength (5% Melee)'},
      {value: 'sharp_eye', children: 'Sharp Eye (5% Range)'},
      {value: 'superhuman_strength', children: 'Superhuman Strength (10% Melee)'},
      {value: 'hawk_eye', children: 'Hawk Eye (10% Range'},
      {value: 'ultimate_strength', children: 'Ultimate Strength (15% Melee)'},
      {value: 'eagle_eye', children: 'Eagle Eye (15% Range)'},
      {value: 'chivalry', children: 'Chivalry (18% Melee)'},
      {value: 'piety', children: 'Piety (23% Melee)'},
      {value: 'rigour', children: 'Rigour (23% Range)'},
    ];
    
    // Map our data to option fields for use inside the select
    const optionFields = prayerOptionObjects.map((e, i) => <option key={i} {...e} />);
    
    return (
      <fieldset className="osrs-max-hit-prayer">
        <legend>
          Prayer
        </legend>
        <select name="prayer" type="list" id="osrs-prayer">
          {optionFields}
        </select>
      </fieldset>
    );
  }
  
  
  render() {
    const formElementStyling = {
      min: 1,
      max: 120,
      style: {
        display: 'none'
      }
    };
    
    return (
      <div>
        <form id="osrs-max-hit-form" className="osrs-max-hit-user-input-form">
          <fieldset className="osrs-max-hit-strength-level">
            <legend>
              Strength Level
            </legend>
            <input name="strength-level" type="number" placeholder="1" min="1" max="99" id="osrs-strength" />
          </fieldset>
  
          
          {this.renderMaxHitPrayer()}
          
          
          <fieldset className="osrs-max-hit-strength-boost">
            <legend>
              Strength Buff
            </legend>
            <select name="strength-boost" type="list" id="osrs-boost" onChange={(e) => {
              checkDharoks(e);
              checkDragonBattleaxe(e);
            }}>
              <option value="false">                 None                  </option>
              <option value="strength_potion">       Strength Potion       </option>
              <option value="super_strength_potion"> Super strength Potion </option>
              <option value="combat_potion">         Combat Potion         </option>
              <option value="zamorak_brew">          Zamorak Brew          </option>
              <option value="dharoks_set">           Dharok's Set          </option>
              <option value="dragon_battleaxe">      Dragon Battleaxe      </option>
            </select>
            
            
            <label id="osrs-missing-health-label" htmlFor="osrs-missing-health"  style={{display: 'none'}}>
              Missing Health
            </label>
            <input type="number" id="osrs-missing-health" min="0" max="98" style={{display: 'none'}} />
  
            
            <label id="osrs-attack-label" htmlFor="osrs-attack"  style={{display: 'none'}}>
              Attack
            </label>
            <input type="number" id="osrs-attack" {...formElementStyling} />
            
            <label id="osrs-defence-label" htmlFor="osrs-defence"  style={{display: 'none'}}>
              Defence
            </label>
            <input type="number" id="osrs-defence" {...formElementStyling} />
            
            <label id="osrs-range-label" htmlFor="osrs-range"  style={{display: 'none'}}>
              Range
            </label>
            <input type="number" id="osrs-range" {...formElementStyling}  />
            
            <label id="osrs-magic-label" htmlFor="osrs-magic"  style={{display: 'none'}}>
              Magic
            </label>
            <input type="number" id="osrs-magic" {...formElementStyling}  />
          </fieldset>
  
          
          <fieldset className="osrs-max-hit-stance">
            <legend>
              Combat Stance
            </legend>
            <select name="combat-stance" type="list"  id="osrs-stance">
              <option value="false">      None               </option>
              <option value="accurate">   Accurate (Ranged)  </option>
              <option value="aggressive"> Aggressive (Melee) </option>
              <option value="controlled"> Controlled (Melee) </option>
            </select>
          </fieldset>
  
          
          <fieldset className="osrs-max-hit-void">
            <legend>
              Void Knight Armour
            </legend>
            <select name="void" type="list"  id="osrs-voidKnight">
              <option value="false">       None        </option>
              <option value="melee">       Melee       </option>
              <option value="range">       Range       </option>
              <option value="elite_range"> Elite Range </option>
            </select>
          </fieldset>
  
          
          <fieldset className="osrs-max-hit-other-equipment">
            <legend>
              Other Equipment
            </legend>
            <select name="other-equipment" type="list" id="osrs-other" onChange={(e) => {checkMeleeOrRange(e);}}>
              <option value="false">             None                               </option>
              <option value="black_mask">        Black Mask / Slayer Helmet         </option>
              <option value="black_mask_(i)">    Black Mask (i) / Slayer Helmet (i) </option>
              <option value="salve_amulet">      Salve Amulet                       </option>
              <option value="salve_amulet_(e)">  Salve Amulet (e)                   </option>
              <option value="salve_amulet_(i)">  Salve Amulet (i)                   </option>
              <option value="salve_amulet_(ei)"> Salve Amulet (ei)                  </option>
            </select>
  
            <label id="osrs-other-combat-type-label" htmlFor="osrs-other-combat-type"  style={{display: 'none'}}>
              Combat Type
            </label>
            <select type="list" id="osrs-other-combat-type" style={{display: 'none'}}>
              <option value="melee">Melee</option>
              <option value="range">Range</option>
            </select>
          </fieldset>
  
          <fieldset className="osrs-max-hit-equipment-strength-bonus">
            <legend>Strength Bonus from Equipment</legend>
            <div>
              If you already know the total strength bonus provided by your equipment, enter that amount below
            </div>
            <input type="number" placeholder="0" id="osrs-equipment-strength-bonus" />
            <div>
              If you don't know your strength bonus from equipment, enter the names of all items that will
              give you strength bonus, and the above field will keep track of the total. If you add items
              that inhabit the same equipment slot the bonus will stack. It is up to you to add items that
              can be equipped at the same time!
            </div>
            <EquipmentSelector />
          </fieldset>
          
          
          <button type="button" value="submit" name="Calculate" onClick={(e) => { calculateMaxHit(e); }} >
            Calculate
          </button>
          
        </form>
      </div>
    );
  }
}
