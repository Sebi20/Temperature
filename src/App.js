import './App.css';
import {useState} from 'react';
import $ from 'jquery';

function App() {
  const[fahrenheit, setFahrenheit] = useState(0);
  const[celsius, setCelsius] = useState(0);
  const[kelvin, setKelvin] = useState(0);

  function test(){
    let fDeg = $("#fahrenheit").val();
    
    setFahrenheit(fDeg);
    setCelsius((fDeg - 32)/1.8000);
    setKelvin((fDeg - 32) * (5/9) + 273.15);
  }

  function test2(){
    let cDeg = $("#celsius").val();
    
    setCelsius(cDeg);
    setFahrenheit(cDeg * 9/5 + 32);
    setKelvin((cDeg * 1) + 273.15);
  }

  function test3(){
    let kDeg = $("#kelvin").val();
    
    setKelvin(kDeg);
    setFahrenheit((kDeg - 273.15) * 1.8 + 32);
    setCelsius(kDeg - 273.15);
  }

  $("#fahrenheit").val(fahrenheit);
  $("#celsius").val(celsius);
  $("#kelvin").val(kelvin);
    

  return (
    <>
    <h1>Temperature Translation</h1>

    <input onChange={test} type='text' name='fahrenheit' id='fahrenheit'></input>
    <p>°F: {fahrenheit}</p>
    <br/>
    <input onChange={test2} type='text' name='celsius' id='celsius'></input>
    <p>°C: {celsius}</p>
    <br/>
    <input onChange={test3} type='text' name='kelvin' id='kelvin'></input>
    <p>°K: {kelvin}</p>
    </>
  );
}

export default App;
