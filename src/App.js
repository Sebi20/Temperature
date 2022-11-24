import './App.css';
import {useState} from 'react';
import $ from 'jquery';

function App() {
  const[fahrenheit, setFahrenheit] = useState(0);
  const[celsius, setCelsius] = useState(0);
  const[kelvin, setKelvin] = useState(0);

  function getFahrenheit(){
    let fDeg = $("#fahrenheit").val();
    
    setFahrenheit(fDeg);
    setCelsius(((fDeg - 32)/1.8000).toFixed(2));
    setKelvin(((fDeg - 32) * (5/9) + 273.15).toFixed(2));
  }

  function getCelsius(){
    let cDeg = $("#celsius").val();
    
    setCelsius(cDeg);
    setFahrenheit((cDeg * 9/5 + 32).toFixed(2));
    setKelvin(((cDeg * 1) + 273.15).toFixed(2));

    
  }

  function getKelvin(){
    let kDeg = $("#kelvin").val();
    
    setKelvin(kDeg);
    setFahrenheit(((kDeg - 273.15) * 1.8 + 32).toFixed(2));
    setCelsius((kDeg - 273.15).toFixed(2));
  }

  $("#fahrenheit").val(fahrenheit);
  $("#celsius").val(celsius);
  $("#kelvin").val(kelvin);

  if(fahrenheit <= -16){
    $('.content').css('box-shadow', '0px 20px 100px 27px rgb(0, 0, 0)');
  }else if(fahrenheit >= -15 && fahrenheit <= -11){
    $('.content').css('box-shadow', '0px 20px 100px 27px rgb(244, 220, 245)');
  }else if(fahrenheit >= -10 && fahrenheit <= -6){
    $('.content').css('box-shadow', '0px 20px 100px 27px rgb(225, 175, 227)');
  } else if(fahrenheit >= -5 && fahrenheit <= -1){
    $('.content').css('box-shadow', '0px 20px 100px 27px rgb(237, 162, 250)');
  }else if(fahrenheit >= 0 && fahrenheit <= 4){
    $('.content').css('box-shadow', '0px 20px 100px 27px rgb(242, 104, 235)');
  }else if(fahrenheit >= 5 && fahrenheit <= 9){
    $('.content').css('box-shadow', '0px 20px 100px 27px rgb(191, 71, 185)');
  }else if(fahrenheit >= 10 && fahrenheit <= 14){
    $('.content').css('box-shadow', '0px 20px 100px 27px rgb(247, 2, 235)');
  }else if(fahrenheit >= 15 && fahrenheit <= 19){
    $('.content').css('box-shadow', '0px 20px 100px 27px rgb(115, 2, 109)');
  }else if(fahrenheit >= 20 && fahrenheit <= 24){
    $('.content').css('box-shadow', '0px 20px 100px 27px rgb(38, 1, 54)');
  }else if(fahrenheit >= 25 && fahrenheit <= 29){
    $('.content').css('box-shadow', '0px 20px 100px 27px rgb(20, 1, 28)');
  }else if(fahrenheit >= 30 && fahrenheit <= 34){
    $('.content').css('box-shadow', '0px 20px 100px 27px (2, 6, 105)');
  }else if(fahrenheit >= 35 && fahrenheit <= 39){
    $('.content').css('box-shadow', '0px 20px 100px 27px rgb(45, 87, 161)');
  }else if(fahrenheit >= 40 && fahrenheit <= 44){
    $('.content').css('box-shadow', '0px 20px 100px 27px rgb(45, 126, 161)');
  }else if(fahrenheit >= 45 && fahrenheit <= 49){
    $('.content').css('box-shadow', '0px 20px 100px 27px rgb(62, 221, 230)');
  }else if(fahrenheit >= 50 && fahrenheit <= 54){
    $('.content').css('box-shadow', '0px 20px 100px 27px rgb(31, 128, 35)');
  }else if(fahrenheit >= 55 && fahrenheit <= 59){
    $('.content').css('box-shadow', '0px 20px 100px 27px rgb(74, 247, 83)');
  }else if(fahrenheit >= 60 && fahrenheit <= 64){
    $('.content').css('box-shadow', '0px 20px 100px 27px rgb(190, 247, 74)');
  }else if(fahrenheit >= 65 && fahrenheit <= 69){
    $('.content').css('box-shadow', '0px 20px 100px 27px rgb(236, 247, 74)');
  }else if(fahrenheit >= 70 && fahrenheit <= 74){
    $('.content').css('box-shadow', '0px 20px 100px 27px rgb(247, 201, 74)');
  }else if(fahrenheit >= 75 && fahrenheit <= 79){
    $('.content').css('box-shadow', '0px 20px 100px 27px rgb(247, 169, 74)');
  }else if(fahrenheit >= 80 && fahrenheit <= 84){
    $('.content').css('box-shadow', '0px 20px 100px 27px rgb(204, 103, 45)');
  }else if(fahrenheit >= 85 && fahrenheit <= 89){
    $('.content').css('box-shadow', '0px 20px 100px 27px rgb(245, 37, 5)');
  }else if(fahrenheit >= 90 && fahrenheit <= 94){
    $('.content').css('box-shadow', '0px 20px 100px 27px rgb(166, 25, 3)');
  }else if(fahrenheit >= 95 && fahrenheit <= 99){
    $('.content').css('box-shadow', '0px 20px 100px 27px rgb(97, 15, 2)');
  }else if(fahrenheit >= 100){
    $('.content').css('box-shadow', '0px 20px 100px 27px rgb(15, 2, 0)');
  }
    

  return (
    <>
      <h1 className='header'>Temperature Conversions</h1>

      <div className='content'>
        <label>Fahrenheit: </label>
        <input onChange={getFahrenheit} type='number' name='fahrenheit' id='fahrenheit'></input>
        <p className='degree'>°F: {fahrenheit}</p>
        <br/>
        <label>Celsius: </label>
        <input onChange={getCelsius} type='number' name='celsius' id='celsius'></input>
        <p className='degree'>°C: {celsius}</p>
        <br/>
        <label>Kelvin: </label>
        <input onChange={getKelvin} type='number' name='kelvin' id='kelvin'></input>
        <p className='degree'>°K: {kelvin}</p>
      </div>
    </>
  );
}

export default App;
