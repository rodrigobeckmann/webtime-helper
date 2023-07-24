import style from './timer.module.css'
import { useState, useEffect } from 'react'

let timerInterval: any = null;

const INITAL_TIME = {
  hours: 0,
  minutes: 0,
  seconds: 0,
}

export default function Timer() {

  const [fixedData, setFixedData] = useState(Date.now());
  const [futureData, setFutureData] = useState(Date.now());
  const [stopWatchTime, setStopWatchTime] = useState(INITAL_TIME);
  const [totalInMilliseconds, setTotalInMilliseconds] = useState(0);
  const [isTimerRuning, setIsTimerRuning] = useState(false);
  const [isTimerSet, setIsTimerSet] = useState(false);

  const { hours, minutes, seconds } = stopWatchTime;

  const handleSetTime = () => {
    setFixedData(Date.now());
    setFutureData(Date.now() + totalInMilliseconds);
    setStopWatchTime(INITAL_TIME);
    setIsTimerSet(true);
  }

  const handleStart = () => {
    setFixedData(Date.now());
    setFutureData(Date.now() + totalInMilliseconds);
    setIsTimerRuning(true);
    timerInterval = setInterval(() => {
      setFixedData(Date.now());
    }, 100)
    setTimeout(() => timerEnded(), totalInMilliseconds)
  }

  const handleStop = () => {
    clearInterval(timerInterval);
    setIsTimerRuning(false);
    setFutureData(fixedData);
    setIsTimerSet(false);
  }

  const timerEnded = () => {
    clearInterval(timerInterval);
    setIsTimerSet(false);
    setIsTimerRuning(false);
  }

  const padZero = (num: number) => {
    return num.toString().padStart(2, '0');
  }

  const renderTime = (targetTime: number, startTime: number) => {

    const time = targetTime - startTime < 0 ? 0 : targetTime - startTime;
    const hours = Math.floor(time / 3600000);
    const minutes = Math.floor((time - hours * 3600000) / 60000);
    const seconds = Math.floor((time - hours * 3600000 - minutes * 60000) / 1000);

    return (
      <span>{padZero(hours)}:{padZero(minutes)}:{padZero(seconds)}</span>
    )
  }

  useEffect(() => {
    if (!isTimerSet) {
      setTotalInMilliseconds(hours * 3600000 + minutes * 60000 + seconds * 1000);
    }
  }, [stopWatchTime])

  const handleTimeChange = (target: EventTarget & HTMLInputElement) => {
    setStopWatchTime({ ...stopWatchTime, [target.id]: target.value });
  }

  return (
    <div className={style.containerColumn}>
      <h2 className={style.clock}>{renderTime(futureData, fixedData)}</h2>
      <div className={style.containerColumn}>

        <div className={style.containerRow}>
          <label htmlFor="hours">
            Horas:
            <input
              type="number"
              id="hours"
              className={style.input}
              value={hours}
              onChange={({ target }) => handleTimeChange(target)}
              min={0}
            />
          </label>

          <label htmlFor="minutes">
            Minutos:
            <input
              type="number"
              id="minutes"
              className={style.input}
              value={minutes}
              onChange={({ target }) => handleTimeChange(target)}
              max={60}
              min={0}
            />
          </label>

          <label htmlFor="seconds">
            Segundos:
            <input
              type="number"
              id="seconds"
              className={style.input}
              value={seconds}
              onChange={({ target }) => handleTimeChange(target)}
              max={60}
              min={0}
            />
          </label>
        </div>

        <div className={style.containerRow}>

          {!isTimerSet && <button onClick={() => handleSetTime()}>set time</button>}

          {!isTimerRuning && isTimerSet && <button onClick={() => handleStart()}>start</button>}

          {isTimerRuning && <button onClick={() => handleStop()}>stop</button>}
        </div>

      </div>
    </div>
  );
}
