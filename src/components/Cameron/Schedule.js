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
        <div className={"schedule-class schedule-" + currentDay + '-class'}
             key={"schedule-element-class-" + currentDay + '-' + i}>
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
      let orderOfWeekDays = Object.keys(scheduleData);
      return orderOfWeekDays.map(this.renderScheduleMapCallback, that);
    }
  }

  // Returns one schedule column for the day of the week that it was called with by the renderSchedule map.
  // Calls renderClassesForRenderSchedule with the day it was called with, which returns a row for each class
  // that is happening that day
  renderScheduleMapCallback(currentDay, i) {

    const classData = renderClassesForRenderSchedule(this.props.scheduleData[currentDay], currentDay);

    return (
      <div className={"schedule-day-column-with-classes schedule-" + currentDay} key={"schedule-element-" + i}>
        <div className={"schedule-day-name-row"}>{capitalizeFirstLetter(currentDay)}</div>
        {classData}
      </div>
    );
  }

  render() {

    // renderSchedule is called with 'this' to give renderScheduleMapCallback
    // the proper 'this' context when it's called inside renderSchedule
    return (
      <div className="schedule-highest-parent">
        <span id="schedule" />
          <iframe src="https://calendar.google.com/calendar/embed?src=icuj41nptkgdo03cm3iv4fst9c%40group.calendar.google.com&ctz=America%2FLos_Angeles"
                  className="schedule-google-calendar" frameBorder="0" scrolling="no" />
        {/*{this.renderSchedule(this.props.scheduleData, this)} no longer necessary due to Google Calendar*/}
      </div>
    );
  }
}
