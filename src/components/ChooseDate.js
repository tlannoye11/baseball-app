import React, { Component } from 'react';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import styles from './ChooseDate.css';

import 'react-datepicker/dist/react-datepicker.css';
 
// CSS Modules, react-datepicker-cssmodules.css 
// import 'react-datepicker/dist/react-datepicker-cssmodules.css'; 
 
class ChooseDate extends Component {
  constructor (props) {
    super(props)
    this.state = {
    };
  }

 
  render() {
    return (
      <div className="calendar-section">
    <h2>Choose a date </h2>
    Start date:
    <DatePicker
        todayButton={"Today"}
        selected={this.props.startDate}
        selectsStart
        startDate={this.props.startDate}
        endDate={this.props.endDate}
        onChange={this.props.handleChange}
        minDate={moment()}
        className="from"
    />
    End date:
    <DatePicker
        selected={this.props.endDate}
        selectsEnd
        startDate={this.props.startDate}
        endDate={this.props.endDate}
        onChange={this.props.handleChangeEnd}
        minDate={this.props.startDate}
    />
    </div>
    );
  }
}

export default ChooseDate;