import React from 'react';
import BigCalendar from 'react-big-calendar';
import "react-big-calendar/lib/css/react-big-calendar.css"
import moment from 'moment';
import { connect } from 'react-redux';

// Setup the localizer by providing the moment (or globalize) Object
// to the correct localizer.
const localizer = BigCalendar.momentLocalizer(moment) // or globalizeLocalizer



const Calendar = props => {
    console.log(props.tasks);
    const myEventsList = props.tasks
    const views = ('month'|'agenda')
    const calendarStyle = {
        height: "100%"
    }
    return (
        <div style={calendarStyle}>
            <BigCalendar
            localizer={localizer}
            events={myEventsList}
            views={views}
            />
        </div>


    )
  
}

const mapStateToProps = (state) => {
    return {
        tasks: state.tasks
    }
}

export default connect(mapStateToProps)(Calendar);