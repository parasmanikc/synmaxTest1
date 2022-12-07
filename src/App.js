import './App.css';
import React, { useState, useEffect } from 'react';

function App() {
  const [redBtnValue, setRedBtnValue] = useState(0)
  const [blueBtnValue, setBlueBtnValue] = useState(0)

  useEffect(() => {
    getRemoteData()
  },[redBtnValue, blueBtnValue])

  const getRemoteData = () => {
    console.log('fetching remote data')
  }

  const onRedButtonClick = () => {
    setRedBtnValue(redBtnValue + 1)
  }

  const onBlueButtonClick = () => {
    setBlueBtnValue(blueBtnValue + 1)
  }
  return (
    <div className="App">
      <button style={{ background: 'red'}} onClick={onRedButtonClick}>Value: {redBtnValue}</button>
      <br />
      <button style={{ background: 'blue'}} onClick={onBlueButtonClick} >Value: {blueBtnValue}</button>
    </div>
  );
}

export default App;
