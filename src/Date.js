import React, {useState} from 'react';
import 'react-dates/initialize';
import {DateRangePicker, SingleDatePicker} from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Date.css';
import SingleDatePickerWrapper from "./SingleDatePicker";

function Date() {
    const [startDate, setStartDate] = useState(null);
    const [endDate, setEndDate] = useState(null);
    const [focusedInput, setFocusedInput] = useState(null);
    const [date, setDate] = useState(null);
    const [focused, setFocused] = useState(null);


    return (
        <div className="date">
            <div className="general">
                <h1 className='general__title'>03.02.Date</h1>
                <span className='general__category'>ADS-15</span>
                <p className='general__desc'>For 'specific' we show 'recuring checkbox. if checked, the date is shown with (Recurring)</p>
            </div>

            <div className="column">
                <p className='column__title'>Single</p>
                <label htmlFor="column__label">Date</label>
                <SingleDatePickerWrapper/>
            </div>

            <div className="column">
                <p className='column__title'>Range</p>
                <label htmlFor="range">Date</label>
                <DateRangePicker
                    startDateId="startDate"
                    endDateId="endDate"
                    startDate={startDate}
                    endDate={endDate}
                    onDatesChange={({startDate, endDate}) => {
                        setEndDate(endDate);
                        setStartDate(startDate);
                    }}
                    focusedInput={focusedInput}
                    onFocusChange={(focusedInput) => {
                        setFocusedInput(focusedInput)
                    }}
                />
            </div>
        </div>
    );

}

export default Date;
