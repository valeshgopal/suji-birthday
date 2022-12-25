import './App.css';
import Timer from './Timer/Timer';

function App() {
  return (
    <div className='container'>
      <div className='content'>
        <h2 className='heading'>Suji Birthday Countdown</h2>
        <p className='subheading'>
          Birthday: Jan 5<sup>th</sup>
        </p>
        <Timer />
      </div>
    </div>
  );
}

export default App;
