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
    setCelsius(((fDeg - 32)/1.8000).toFixed(2));
    setKelvin(((fDeg - 32) * (5/9) + 273.15).toFixed(2));

  }

  function test2(){
    let cDeg = $("#celsius").val();
    
    setCelsius(cDeg);
    setFahrenheit((cDeg * 9/5 + 32).toFixed(2));
    setKelvin(((cDeg * 1) + 273.15).toFixed(2));
  }

  function test3(){
    let kDeg = $("#kelvin").val();
    
    setKelvin(kDeg);
    setFahrenheit(((kDeg - 273.15) * 1.8 + 32).toFixed(2));
    setCelsius((kDeg - 273.15).toFixed(2));
  }

  $("#fahrenheit").val(fahrenheit);
  $("#celsius").val(celsius);
  $("#kelvin").val(kelvin);
    

  return (
    <>
      <h1 className='header'>Temperature Conversions</h1>

      <div className='content'>
        <label>Fahrenheit: </label>
        <input onChange={test} type='text' name='fahrenheit' id='fahrenheit'></input>
        <p className='degree'>°F: {fahrenheit}</p>
        <br/>
        <label>Celsius: </label>
        <input onChange={test2} type='text' name='celsius' id='celsius'></input>
        <p className='degree'>°C: {celsius}</p>
        <br/>
        <label>Kelvin: </label>
        <input onChange={test3} type='text' name='kelvin' id='kelvin'></input>
        <p className='degree'>°K: {kelvin}</p>
      </div>
    </>
  );
}

export default App;
