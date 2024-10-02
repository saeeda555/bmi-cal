import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
const [height,setHeight] = useState('')
const [weight,setWeight] = useState('')
const [bmi,setBmi] = useState('')



function bmicalculate(height,weight){
  if(height === '' || height < 0 || isNaN(height)){
    setHeight('please give a valid height')
}else if (weight === '' || weight < 0 || isNaN(weight)) {
  setWeight('please give a valid height')
  
} else {
    const bmi = (weight/((height*height)/10000)).toFixed(2)
    setBmi(bmi)
    console.log(bmi);
}
}

const result = (bmi) => {if(bmi < 18.6){
  return('under weight')
}else if(bmi > 24.9){
  return('over weight')
}else{
  return('Normal')
}}

  return (
    <>
      <h1> BMI calculator</h1>
      <div>
        <label htmlFor="">Height in CM:</label>
        <input type="text" value={height} onChange={(e) => setHeight(e.target.value)} />
        <br />
        <label htmlFor="">Weight in kg:</label>
        <input type="text" value={weight} onChange={(e) => setWeight(e.target.value)}/>
        <br />
       <button onClick={() => bmicalculate(height,weight)}>calculate</button>

        <div>
          <h1>
            {`BMi is ${bmi}`}
          </h1>
          <div>
            <h1>
              {`You are ${result(bmi)}`}

            </h1>
          </div>
          
        </div>
      </div>

      <h1>BMI weight </h1>
      <p>under weight = Less than 18.6</p>
      <p>Normal range = 18.6 and 24.9</p>
      <p>Overweight = Greater than 24.9</p>

    </>
  )
}

export default App
