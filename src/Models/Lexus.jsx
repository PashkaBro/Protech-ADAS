import React from "react";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function Lexus() {


    return (

<select className="ContentSelect custom-select-lg mb-3" id='lexus'>
    <option selected>Model</option>
        <option value="1">CT</option>
        <option value="2">ES</option>
        <option value="3">GS</option>
        <option value="4">GX</option>
        <option value="5">IS</option>
        <option value="6">LC</option>
        <option value="7">LS</option>
        <option value="8">LX</option>
        <option value="9">NX</option>
        <option value="10">RC</option>
        <option value="11">RX</option>
        <option value="12">UX</option>
    </select>


    );
}

export default Lexus;
