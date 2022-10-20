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
    $('.content').css('box-shadow', '0px 20px 100px 27px rgba(0, 0, 0, 0.9)');
  }else if(fahrenheit >= -15 && fahrenheit <= -11){
    $('.content').css('box-shadow', '0px 20px 100px 27px rgba(244, 220, 245, 0.9)');
  }else if(fahrenheit >= -10 && fahrenheit <= -6){
    $('.content').css('box-shadow', '0px 20px 100px 27px rgba(225, 175, 227, 0.9)');
  } else if(fahrenheit >= -5 && fahrenheit <= -1){
    $('.content').css('box-shadow', '0px 20px 100px 27px rgba(237, 162, 250, 0.9)');
  }else if(fahrenheit >= 0 && fahrenheit <= 4){
    $('.content').css('box-shadow', '0px 20px 100px 27px rgba(242, 104, 235, 0.9)');
  }else if(fahrenheit >= 5 && fahrenheit <= 9){
    $('.content').css('box-shadow', '0px 20px 100px 27px rgba(191, 71, 185, 0.9)');
  }else if(fahrenheit >= 10 && fahrenheit <= 14){
    $('.content').css('box-shadow', '0px 20px 100px 27px rgba(247, 2, 235, 0.9)');
  }else if(fahrenheit >= 15 && fahrenheit <= 19){
    $('.content').css('box-shadow', '0px 20px 100px 27px rgba(115, 2, 109, 0.9)');
  }else if(fahrenheit >= 20 && fahrenheit <= 24){
    $('.content').css('box-shadow', '0px 20px 100px 27px rgba(38, 1, 54, 0.9)');
  }else if(fahrenheit >= 25 && fahrenheit <= 29){
    $('.content').css('box-shadow', '0px 20px 100px 27px rgba(20, 1, 28, 0.9)');
  }else if(fahrenheit >= 30 && fahrenheit <= 34){
    $('.content').css('box-shadow', '0px 20px 100px 27px rgba(2, 6, 105, 0.9)');
  }else if(fahrenheit >= 35 && fahrenheit <= 39){
    $('.content').css('box-shadow', '0px 20px 100px 27px rgba(45, 87, 161, 0.9)');
  }else if(fahrenheit >= 40 && fahrenheit <= 44){
    $('.content').css('box-shadow', '0px 20px 100px 27px rgba(45, 126, 161, 0.9)');
  }else if(fahrenheit >= 45 && fahrenheit <= 49){
    $('.content').css('box-shadow', '0px 20px 100px 27px rgba(62, 221, 230, 0.9)');
  }else if(fahrenheit >= 50 && fahrenheit <= 54){
    $('.content').css('box-shadow', '0px 20px 100px 27px rgba(31, 128, 35, 0.9)');
  }else if(fahrenheit >= 55 && fahrenheit <= 59){
    $('.content').css('box-shadow', '0px 20px 100px 27px rgba(74, 247, 83, 0.9)');
  }else if(fahrenheit >= 60 && fahrenheit <= 64){
    $('.content').css('box-shadow', '0px 20px 100px 27px rgba(190, 247, 74, 0.9)');
  }else if(fahrenheit >= 65 && fahrenheit <= 69){
    $('.content').css('box-shadow', '0px 20px 100px 27px rgba(236, 247, 74, 0.9)');
  }else if(fahrenheit >= 70 && fahrenheit <= 74){
    $('.content').css('box-shadow', '0px 20px 100px 27px rgba(247, 201, 74, 0.9)');
  }else if(fahrenheit >= 75 && fahrenheit <= 79){
    $('.content').css('box-shadow', '0px 20px 100px 27px rgba(247, 169, 74, 0.9)');
  }else if(fahrenheit >= 80 && fahrenheit <= 84){
    $('.content').css('box-shadow', '0px 20px 100px 27px rgba(204, 103, 45, 0.9)');
  }else if(fahrenheit >= 85 && fahrenheit <= 89){
    $('.content').css('box-shadow', '0px 20px 100px 27px rgba(245, 37, 5, 0.9)');
  }else if(fahrenheit >= 90 && fahrenheit <= 94){
    $('.content').css('box-shadow', '0px 20px 100px 27px rgba(166, 25, 3, 0.9)');
  }else if(fahrenheit >= 95 && fahrenheit <= 99){
    $('.content').css('box-shadow', '0px 20px 100px 27px rgba(97, 15, 2, 0.9)');
  }else if(fahrenheit >= 100){
    $('.content').css('box-shadow', '0px 20px 100px 27px rgba(15, 2, 0, 0.9)');
  }
    

  return (
    <>
      <h1 className='header'>Temperature Conversions</h1>

      <div className='content'>
        <label>Fahrenheit: </label>
        <input onChange={getFahrenheit} type='text' name='fahrenheit' id='fahrenheit'></input>
        <p className='degree'>°F: {fahrenheit}</p>
        <br/>
        <label>Celsius: </label>
        <input onChange={getCelsius} type='text' name='celsius' id='celsius'></input>
        <p className='degree'>°C: {celsius}</p>
        <br/>
        <label>Kelvin: </label>
        <input onChange={getKelvin} type='text' name='kelvin' id='kelvin'></input>
        <p className='degree'>°K: {kelvin}</p>
      </div>
    </>
  );
}

export default App;
