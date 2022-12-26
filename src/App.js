import './App.css';
import Timer from './Timer/Timer';
import React from 'react';

function App() {
  const [timerDone, setTimerDone] = React.useState(false);
  return (
    <div className='container'>
      <div className='content'>
        {!timerDone && <h2 className='heading'>Suji Birthday Countdown</h2>}
        <p className='subheading'>
          Birthday: Jan 5<sup>th</sup>
        </p>
        <Timer setTimerDone={setTimerDone} />
      </div>
    </div>
  );
}

export default App;
