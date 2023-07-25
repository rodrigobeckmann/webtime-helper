import { useState, useEffect } from 'react'
import { ContainerColumn, ContainerRow, ClockContainer, ProgressBar, FillerBar, Input } from '../styles';

let timerInterval: any = null;
let timerTimeout: any = null;

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
  const [progressBar, setProgressBar] = useState(0);

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
    timerTimeout = setTimeout(() => timerEnded(), totalInMilliseconds)
  }

  const handleStop = () => {
    clearInterval(timerInterval);
    clearTimeout(timerTimeout);
    setIsTimerRuning(false);
    setFutureData(fixedData);
    setIsTimerSet(false);
  }

  const timerEnded = () => {
    clearInterval(timerInterval);
    setIsTimerSet(false);
    setIsTimerRuning(false);
    console.log('end')
  }

  const padZero = (num: number) => {
    return num.toString().padStart(2, '0');
  }

  const renderTime = (targetTime: number, startTime: number) => {

    const time = targetTime - startTime <= 0 ? 0 : targetTime - startTime;
    const hours = Math.floor(time / 3600000);
    const minutes = Math.floor((time - hours * 3600000) / 60000);
    const seconds = Math.ceil((time - hours * 3600000 - minutes * 60000) / 1000);

    return (
      <span>{padZero(hours)}:{padZero(minutes)}:{padZero(seconds)}</span>
    )

  }

  useEffect(() => {

    const progressBarFiller = () => {
      const timeProgress = ((fixedData - futureData) / totalInMilliseconds * 100) + 100;
      setProgressBar(timeProgress > 100 ? 100 : timeProgress);
    }

    progressBarFiller();

  }, [fixedData])



  useEffect(() => {
    if (!isTimerSet) {
      setTotalInMilliseconds(hours * 3600000 + minutes * 60000 + seconds * 1000);
    }
  }, [stopWatchTime])

  const verifyNumber = (target: EventTarget & HTMLInputElement) => {
    if (target.id !== 'hours') {
      if (target.valueAsNumber > 59) {
        return 59;
      } else if (target.valueAsNumber < 0) {
        return 0;
      } else {
        return target.valueAsNumber;
      }
    } else {
      return target.valueAsNumber;
    }
  }

  const handleTimeChange = (target: EventTarget & HTMLInputElement) => {

    const value = verifyNumber(target);


    setStopWatchTime({ ...stopWatchTime, [target.id]: value });
  }

  return (
    <ContainerColumn>
      <ClockContainer>{renderTime(futureData, fixedData)}</ClockContainer>

      {isTimerSet && <ProgressBar id='progressBar'>
        <FillerBar id='filler' style={{ width: `${progressBar}%`, transition: `width 100ms linear` }}></FillerBar>
      </ProgressBar>}

      <ContainerColumn>

        {!isTimerSet && <ContainerRow>
          <label htmlFor="hours">
            Horas:
            <Input
              type="number"
              id="hours"
              value={hours}
              onChange={({ target }) => handleTimeChange(target)}
              min={0}
            />
          </label>

          <label htmlFor="minutes">
            Minutos:
            <Input
              type="number"
              id="minutes"
              value={minutes}
              onChange={({ target }) => handleTimeChange(target)}
            />
          </label>

          <label htmlFor="seconds">
            Segundos:
            <Input
              type="number"
              id="seconds"
              value={seconds}
              onChange={({ target }) => handleTimeChange(target)}
              max={60}
              min={0}
            />
          </label>
        </ContainerRow>}

        <ContainerRow>

          {!isTimerSet && <button onClick={() => handleSetTime()}>set time</button>}

          {!isTimerRuning && isTimerSet && <button onClick={() => handleStart()}>start</button>}

          {isTimerRuning && <button onClick={() => handleStop()}>stop</button>}
        </ContainerRow>

      </ContainerColumn>
    </ContainerColumn>
  );
}
