import React, { Component } from 'react';
import './style.css'; //TODO: delete

//TODO: check if this should be moved into the Schedule Component
function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

//TODO: check if this should be moved into the Schedule Component
function renderClassesForRenderSchedule(arrayOfCurrentDaysClassObjects, currentDay) {
  if (arrayOfCurrentDaysClassObjects) {
    return arrayOfCurrentDaysClassObjects.map(function arrayOfCurrentDaysClassObjects(currentClassDataObject, i) {
      const { startTime, endTime, ageRestriction } = currentClassDataObject;
      if (!startTime || !endTime || !ageRestriction) {
        return;
      }
      return (
        <div className={"schedule-class schedule-" + currentDay + '-class'} key={"schedule-element-class-" + currentDay + '-' + i}>
          <div className="schedule-class-time">
            {startTime} - {endTime}
          </div>
          <div className="schedule-class-ages">
            Ages: {ageRestriction}
          </div>
        </div>
      );
    });
  }
}

export default class Schedule extends Component {
  
  renderSchedule(scheduleData, that) {
    if (scheduleData) {
      return scheduleData.orderOfWeekDays.map(this.renderScheduleMapCallback, that);
    }
  }
  
  // Returns one schedule column for the day of the week that it was called with by the renderSchedule map.
  // Calls renderClassesForRenderSchedule with the day it was called with, which returns a row for each class
  // that is happening that day
  renderScheduleMapCallback(currentDay, i) {
    
    return (
      <div className={"schedule-day-column schedule-" + currentDay} key={"schedule-element-" + i}>
        <div className={"schedule-day-name-row"}>{capitalizeFirstLetter(currentDay)}</div>
        {renderClassesForRenderSchedule(this.props.scheduleData[currentDay], currentDay)}
      </div>
    );
  }
  
  render() {
    
    // renderSchedule is called with 'this' to give renderScheduleMapCallback
    // the proper 'this' context when it's called inside renderSchedule
    return (
      <div>
        <div className="schedule-highest-parent">
          {this.renderSchedule(this.props.scheduleData, this)}
        </div>
      </div>
    );
  }
}
