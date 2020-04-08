import React from "react";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function Honda() {


    return (

        <select className="ContentSelect custom-select-lg mb-3" id='Honda'>

                <option value="1">Accord</option>
                <option value="2">CR-V</option>
                <option value="3">CR-Z</option>
                <option value="4">Civic</option>
                <option value="5">Clarity</option>
                <option value="6">Fit</option>
                <option value="7">HR-V</option>
                <option value="8">Insight</option>
                <option value="9">Odyssey</option>
                <option value="10">Passport</option>
                <option value="11">Pilot</option>
                <option value="12">Ridgeline</option>
            </select>

    );
}

export default Honda;
