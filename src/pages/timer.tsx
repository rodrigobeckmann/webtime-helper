import { useState, useEffect } from 'react'
import { ContainerColumn, ContainerRow, ClockContainer, ProgressBar, FillerBar } from '../styles';
import { useAppDispatch, useAppSelector } from '../app/hooks';
import { updateFixedDate, handleStartTime, handleStopTimer, openModal, handleTimerEnded } from '../app/slicers/timerSlice';
import renderTime from '../utils/renderTime';
import TimerModal from '../components/timerModal';

let timerInterval: any = null;
let timerTimeout: any = null;

export default function Timer() {

  const dispatch = useAppDispatch();

  const { isModalOpen, isTimerRunning, isTimerSet, futureDate, fixedDate, timerClock } = useAppSelector((state) => state.timer);

  const { milliseconds } = timerClock;

  const [progressBar, setProgressBar] = useState(0);

  const handleStart = () => {
    dispatch(handleStartTime())
    timerInterval = setInterval(() => {
      dispatch(updateFixedDate());
    }, 100)
    timerTimeout = setTimeout(() => timerEnded(), milliseconds)
  }

  const handleStop = () => {
    clearInterval(timerInterval);
    clearTimeout(timerTimeout);
    dispatch(handleStopTimer());

  }

  const timerEnded = () => {
    clearInterval(timerInterval);
    dispatch(handleTimerEnded());
  }

  useEffect(() => {

    const progressBarFiller = () => {
      const timeProgress = ((fixedDate - futureDate) / milliseconds * 100) + 100;
      setProgressBar(timeProgress > 100 ? 100 : timeProgress);
    }

    progressBarFiller();

  }, [fixedDate])

  return (
    <ContainerColumn>
      <ClockContainer>{renderTime(futureDate, fixedDate)}</ClockContainer>

      {isTimerSet && <ProgressBar id='progressBar'>
        <FillerBar id='filler' style={{ width: `${progressBar}%`, transition: `width 100ms linear` }}></FillerBar>
      </ProgressBar>}

      <ContainerColumn>

        {isModalOpen && <TimerModal />}

        <ContainerRow>

          {!isTimerSet && <button onClick={() => dispatch(openModal())}>set time</button>}

          {!isTimerRunning && isTimerSet && <button onClick={() => handleStart()}>start</button>}

          {isTimerRunning && <button onClick={() => handleStop()}>stop</button>}
        </ContainerRow>

      </ContainerColumn>
    </ContainerColumn>
  );
}
