import { useState, useEffect } from 'react'
import { ContainerColumn, ContainerRow, ClockContainer, ProgressBar, FillerBar, Input, InputLabel, InputsContainer } from '../styles';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../app/store';
import { modalStateChange, timerRuningStateChange, timerSetStateChange, incrementFutureDate, updateFixedDate, stopTimer } from '../app/slicers/timerSlice';

let timerInterval: any = null;
let timerTimeout: any = null;

const INITAL_TIME = {
  hours: 0,
  minutes: 0,
  seconds: 0,
}

export default function Timer() {

  const dispatch = useDispatch();

  const { isModalOpen, isTimerRunning, isTimerSet, futureDate, fixedDate } = useSelector((state: RootState) => state.timer);



  const [stopWatchTime, setStopWatchTime] = useState(INITAL_TIME);
  const [totalInMilliseconds, setTotalInMilliseconds] = useState(0);
  const [progressBar, setProgressBar] = useState(0);
  const { hours, minutes, seconds } = stopWatchTime;

  const handleSetTime = () => {
    dispatch(updateFixedDate());
    dispatch(incrementFutureDate(totalInMilliseconds));
    setStopWatchTime(INITAL_TIME);
    dispatch(timerSetStateChange());
    dispatch(modalStateChange());
  }

  const handleStart = () => {
    dispatch(updateFixedDate());
    dispatch(incrementFutureDate(totalInMilliseconds));
    dispatch(timerRuningStateChange());
    timerInterval = setInterval(() => {
      dispatch(updateFixedDate());
    }, 100)
    timerTimeout = setTimeout(() => timerEnded(), totalInMilliseconds)
  }

  const handleStop = () => {
    clearInterval(timerInterval);
    clearTimeout(timerTimeout);
    dispatch(timerRuningStateChange());
    dispatch(stopTimer());
    dispatch(timerSetStateChange());
  }

  const openModal = () => {
    dispatch(modalStateChange());
  }

  const timerEnded = () => {
    clearInterval(timerInterval);
    dispatch(timerSetStateChange());
    dispatch(timerRuningStateChange());
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
      const timeProgress = ((fixedDate - futureDate) / totalInMilliseconds * 100) + 100;
      setProgressBar(timeProgress > 100 ? 100 : timeProgress);
    }

    progressBarFiller();

  }, [fixedDate])

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
      <ClockContainer>{renderTime(futureDate, fixedDate)}</ClockContainer>

      {isTimerSet && <ProgressBar id='progressBar'>
        <FillerBar id='filler' style={{ width: `${progressBar}%`, transition: `width 100ms linear` }}></FillerBar>
      </ProgressBar>}

      <ContainerColumn>


        {isModalOpen && <InputsContainer>
          <InputLabel htmlFor="hours">
            Horas:
            <Input
              type="number"
              id="hours"
              value={hours}
              onChange={({ target }) => handleTimeChange(target)}
              min={0}
            />
          </InputLabel>

          <InputLabel htmlFor="minutes">
            Minutos:
            <Input
              type="number"
              id="minutes"
              value={minutes}
              onChange={({ target }) => handleTimeChange(target)}
            />
          </InputLabel>

          <InputLabel htmlFor="seconds">
            Segundos:
            <Input
              type="number"
              id="seconds"
              value={seconds}
              onChange={({ target }) => handleTimeChange(target)}
              max={60}
              min={0}
            />
          </InputLabel>

          <button onClick={() => handleSetTime()}>set time</button>

        </InputsContainer>}


        <ContainerRow>

          {!isTimerSet && <button onClick={() => openModal()}>set time</button>}

          {!isTimerRunning && isTimerSet && <button onClick={() => handleStart()}>start</button>}

          {isTimerRunning && <button onClick={() => handleStop()}>stop</button>}
        </ContainerRow>

      </ContainerColumn>
    </ContainerColumn>
  );
}
