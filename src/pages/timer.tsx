import { useEffect } from 'react'
import { ContainerRow, ClockContainer, ProgressBar, FillerBar, Button, ComponentContainer } from '../styles';
import { useAppDispatch, useAppSelector } from '../app/hooks';
import { updateFixedDate, handleStartTime, handleStopTimer, openModal, handleTimerEnded, updateProgressBar } from '../app/slicers/timerSlice';
import renderTime from '../utils/renderTime';
import TimerModal from '../components/timerModal';
import alarmsound from '../assets/alarmsound.mp3';

let timerInterval: any = null;
let timerTimeout: any = null;

export default function Timer() {

  const dispatch = useAppDispatch();

  const { isModalOpen, isTimerRunning, isTimerSet, futureDate, fixedDate, timerClock, progressBar } = useAppSelector((state) => state.timer);

  const { milliseconds } = timerClock;


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
    const alarm = new Audio(alarmsound);
    alarm.play();
    dispatch(handleTimerEnded());
  }

  useEffect(() => {

    dispatch(updateProgressBar());

  }, [fixedDate])

  return (
    <ComponentContainer>
      <ClockContainer>{renderTime(futureDate, fixedDate)}</ClockContainer>

      {isTimerSet && <ProgressBar id='progressBar'>
        <FillerBar id='filler' style={{ width: `${progressBar.filler}%`, transition: `width 100ms linear` }}></FillerBar>
      </ProgressBar>}


      {isModalOpen && <TimerModal />}

      <ContainerRow>

        {!isTimerSet && <Button onClick={() => dispatch(openModal())}>Editar Tempo</Button>}

        {!isTimerRunning && isTimerSet && <Button onClick={() => handleStart()}>start</Button>}

        {isTimerRunning && <Button onClick={() => handleStop()}>stop</Button>}
      </ContainerRow>

    </ComponentContainer>
  );
}
