import React, {useState} from 'react';
import Select from 'react-select';
import SingleDatePickerWrapper from "./SingleDatePicker";
import {DateRangePicker} from "react-dates";

function MultipleOption(props) {
    const data = [
        {value: 1, label: 'Budget', icon: '+', isDisabled: true},
        {value: 2, label: 'Food allergies', icon: '+', isDisabled: false},
        {value: 3, label: 'number of people', icon: '+', isDisabled: false},
        {value: 4, label: 'Special restrictions', icon: '+', isDisabled: false},
    ];

    const [selectedValue, setSelectedValue] = useState({
        value: 5,
        label: 'search questions'
    });

    const [isDisabled, setIsDisabled] = useState({
        isDisabled: true,
    });

    const handleSelected = obj => {
        setIsDisabled(obj);
    }

    const handleChange = obj => {
        setSelectedValue(obj);
    }

    return (
        <div className="date">
            <div className="general">
                <h1 className='general__title'>02.08.MultipleOptions with multiple add</h1>
                <span className='general__category general__category--bg'>✓ ADS-35</span>
            </div>

            <div className="column">
                <Select
                    value={selectedValue}
                    options={data}
                    onChange={handleChange}
                    isOptionDisabled={option => option.isDisabled}
                    isSelected={handleSelected}
                    isSearchable={true}
                />
            </div>
        </div>
    );
}

export default MultipleOption;
