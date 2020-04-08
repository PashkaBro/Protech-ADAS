import React, {useState} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

let searchValue = []

function Content() {


    // const [todo, setTodo] = useState(0);

    // const todoClick = (n) => {
    //     setTodo()
    // }

    function getIndex() {
            // document.getElementById("Make").selectedIndex;
        let e = document.getElementById("Make");
        let value = e.options[e.selectedIndex].text;
        // todoClick(value);
        console.log(value);
        searchValue.push(value)
    }

    return (
      <div>


          <div className="Content border border-dark rounded-lg" >
              <select className="ContentSelect custom-select-lg mb-3 border-dark" id='Make'>
                  <option   value='0'>--Select Make--</option>
                  <option   value='1'>Acura</option>
                  <option   value='2'>Alfa Romeo</option>
                  <option   value='3'>Buick</option>
                  <option   value='4'>Cadillac</option>
                  <option   value='5'>Chevrolet</option>
                  <option   value='6'>Chrysler</option>
                  <option   value='7'>Dodge</option>
                  <option   value='8'>Fiat</option>
                  <option   value='9'>Ford</option>
                  <option   value='10'>GMC</option>
                  <option   value='31'>Genesis</option>
                  <option   value='11'>Honda</option>
                  <option   value='12'>Hyundai</option>
                  <option   value='13'>Infiniti</option>
                  <option   value='14'>Jaguar</option>
                  <option   value='15'>Jeep</option>
                  <option   value='16'>Kia</option>
                  <option   value='17'>Land Rover</option>
                  <option   value='18'>Lexus</option>
                  <option   value='19'>Lincoln</option>
                  <option   value='20'>Mazda</option>
                  <option   value='21'>Mercedes-Benz</option>
                  <option   value='22'>Mitsubishi</option>
                  <option   value='23'>Nissan</option>
                  <option   value='24'>RAM</option>
                  <option   value='25'>Scion</option>
                  <option   value='26'>Subaru</option>
                  <option   value='30'>Tesla</option>
                  <option   value='27'>Toyota</option>
                  <option   value='28'>Volkswagen</option>
                  <option   value='29'>Volvo</option>
              </select>


              <select className="ContentSelect custom-select-lg mb-3">
                  <option selected>Model</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
              </select>


              <select className="ContentSelect Year custom-select-lg mb-3" >
                  <option   value='0'>--Year--</option>
                  <option   value='1'>2010</option>
                  <option   value='2'>2012</option>
                  <option   value='3'>2013</option>
                  <option   value='4'>2014</option>
                  <option   value='5'>2015</option>
                  <option   value='6'>2016</option>
                  <option   value='7'>2017</option>
                  <option   value='8'>2018</option> <option   value='3'>2018</option>
                  <option   value='9'>2019</option>
                  <option   value='10'>2020</option>
              </select>

              <button type="button" className="btn btn-outline-secondary btn-lg" onClick={() => getIndex()}>Search</button>
          </div>
      </div>

  );
}

export default Content;
