import React, {useState, useEffect} from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [Counter, setCounter] = useState(0) 
  const [Counter2, setCounter2] = useState(100);

  useEffect(()=>{
    console.log('effect called')
    document.title = `Counter is ${Counter}`
  })


  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
           My Counter is { Counter } || { Counter2 }
        </p>
        <button
        onClick={increaseCounter}
        >
          Increment
        </button>
        
      </header>
    </div>
  );

  function increaseCounter(){
    if(Counter2 % 2 === 1){
      setCounter(prevCounter => prevCounter+2)

    }
    setCounter2(prevCounter => prevCounter-1)

    
  }
}

export default App;
