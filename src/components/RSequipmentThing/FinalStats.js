import React, {Component} from 'react';
import FinalStatsIconAndStat from './FinalStatsIconAndStat';
import statProps, {topRow, midRow, botRow} from './statProps';

class FinalStats extends Component {

  addStats(currentStat) {
    let score = 0;
    let topItemsForSlots = this.props.topItemsForSlots;
    let slotTitles = ["head", "cape", "neck", "weapon", "body", "shield", "legs", "hands", "feet", "ring"];
    for (let i = 0; i < slotTitles.length; i++) {
      let currentItem = topItemsForSlots[slotTitles[i]][0];
      if (!currentItem) {
        continue;
      }
      score += currentItem.stats[currentStat.statCategory][currentStat.attackStyle];
    }
    return score.toString();
  }

  renderStat(statToRender) {
    let statProp = statProps[statToRender];
    let statName = statProp.statName;

    return (
      <FinalStatsIconAndStat {...statProp} displayValue={this.addStats(statProp)} key={statName}
                             toggledStat={this.props.checkedAllStatStates[statName]} />
    );
  }

  render() {

    return (
      <div className="final-stats head-text">Final stats
        <div className="final-stats-div-child final-stats-div-child-top-box">
          <div className="final-stats-category">
            Offensive
          </div>
          <div className="final-stats-top-row">
            {topRow.map(this.renderStat, this)}
          </div>
        </div>

        <div className="final-stats-div-child">
          <div className="final-stats-category">
            Defensive
          </div>
          <div className="final-stats-top-row">
            {midRow.map(this.renderStat, this)}
          </div>
        </div>

        <div className="final-stats-div-child">
          <div className="final-stats-category">
            Bonus
          </div>
          <div className="final-stats-top-row">
            {botRow.map(this.renderStat, this)}
          </div>
        </div>
      </div>
    );
  }
}

export default FinalStats;
