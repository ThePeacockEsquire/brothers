import React, { Component } from 'react';
import { Table, Checkbox } from 'react-bootstrap';

Date.prototype.getWeek = function() {
  var date = new Date(this.getTime());
  date.setHours(0, 0, 0, 0);
  // Thursday in current week decides the year.
  date.setDate(date.getDate() + 3 - (date.getDay() + 6) % 7);
  // January 4 is always in week 1.
  var week1 = new Date(date.getFullYear(), 0, 4);
  // Adjust to Thursday in week 1 and count number of weeks from date to week1.
  return 1 + Math.round(((date.getTime() - week1.getTime()) / 86400000 - 3 + (week1.getDay() + 6) % 7) / 7);
}

function getDateRangeOfWeek(weekNo, y){
    var d1, numOfdaysPastSinceLastMonday, rangeIsFrom, rangeIsTo;
    d1 = new Date();
    numOfdaysPastSinceLastMonday = d1.getDay() - 1;
    d1.setDate(d1.getDate() - numOfdaysPastSinceLastMonday);
    d1.setDate(d1.getDate() + (7 * (weekNo - d1.getWeek())));
    rangeIsFrom = (d1.getMonth() + 1) + "/" + d1.getDate() + "/" + d1.getFullYear();
    d1.setDate(d1.getDate() + 6);
    rangeIsTo = (d1.getMonth() + 1) + "/" + d1.getDate() + "/" + d1.getFullYear() ;
    return rangeIsFrom + " to " + rangeIsTo;
};

class Tasker extends Component {
  render() {
    var d = new Date();
       return (
         <div>
         <h1>For the week of: {getDateRangeOfWeek(d.getWeek(), d.getFullYear)}</h1>
        <Table responsive striped bordered condensed hover>
          <thead>
            <tr>
              <th>Housemate</th>
              <th>Task</th>
              <th>Completed?</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Cam</td>
              <td>Wash the dishes</td>
              <td><Checkbox></Checkbox></td>
            </tr>
            <tr>
              <td>Tanner</td>
              <td>Take out the Trash</td>
              <td><Checkbox></Checkbox></td>
            </tr>
            <tr>
              <td>Stephen</td>
              <td>Clean the bathroom</td>
              <td><Checkbox></Checkbox></td>
            </tr>
            <tr>
              <td>Devin</td>
              <td>Plan Dinner</td>
              <td><Checkbox></Checkbox></td>
            </tr>
          </tbody>
        </Table>
      </div>
    );
  }
}

export default Tasker;
