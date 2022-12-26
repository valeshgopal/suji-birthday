import styles from './Timer.module.css';
import React from 'react';
import Countdown from 'react-countdown';

const Timer = ({ setTimerDone }) => {
  const Completionist = () => (
    <span className={styles.message}>Happy Birthday Suji!🎂</span>
  );
  const renderer = ({ days, hours, minutes, seconds, completed }) => {
    if (completed) {
      setTimerDone(true);
      // Render a completed state
      return <Completionist />;
    } else {
      // Render a countdown
      return (
        <section className={styles.countdown}>
          <div>
            <span className={styles.duration}>{days} </span>
            <span className={styles.label}>Days</span>
          </div>
          <div>
            <span className={styles.duration}>{hours} </span>
            <span className={styles.label}>Hours</span>
          </div>
          <div>
            <span className={styles.duration}>{minutes} </span>
            <span className={styles.label}>Minutes</span>
          </div>
          <div>
            <span className={styles.duration}>{seconds} </span>
            <span className={styles.label}>Seconds</span>
          </div>
        </section>
      );
    }
  };
  return (
    <div className={styles.timer}>
      <Countdown
        date={new Date('January 5, 2023 00:00:00')}
        renderer={renderer}
      />
    </div>
  );
};

export default Timer;
