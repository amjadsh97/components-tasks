import React from 'react';
import './App.css';
import Date from "./Date";
import SingleDatePickerWrapper from "./SingleDatePicker";
import MultipleOption from "./MultipleOption";

function App() {


    return (
        <div className="app">
            <Date/>
            <MultipleOption/>
        </div>
    );
}

export default App;
