import { useEffect } from 'react'
import { ContainerRow, ClockContainer, Button, ComponentContainer, PomodoroInterval } from '../styles';
import { useAppDispatch, useAppSelector } from '../app/hooks';
import { handleStartPomodoro, updateFixedDate, handleTimePause, handleResumePomodoro, setPomodoroTime, updateInterval, setInitialClock } from '../app/slicers/pomodoroSlice';
import alarmsound from '../assets/alarmsound.mp3';
import renderPomodoroTime from '../utils/renderPomodoroTime';

let timerInterval: any = null;
let timerTimeout: any = null;

// 25 - 5 - 25 - 5 - 25 - 5 - 25 - 15


export default function Pomodoro() {

    const { fixedDate, futureDate, isTimeRunning, isTimePaused, remainingTime, actualInterval } = useAppSelector(state => state.pomodoro);

    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(setPomodoroTime());
        dispatch(setInitialClock());
    }, [])

    const handleStart = () => {
        dispatch(handleStartPomodoro())
        timerInterval = setInterval(() => {
            dispatch(updateFixedDate());
        }, 100)
        timerTimeout = setTimeout(() => timerEnded(), remainingTime)
    }

    const handlePause = () => {
        clearInterval(timerInterval);
        clearTimeout(timerTimeout);
        dispatch(handleTimePause());
    }

    const handlePlay = () => {
        dispatch(handleResumePomodoro());
        timerInterval = setInterval(() => {
            dispatch(updateFixedDate());
        }, 100)
        timerTimeout = setTimeout(() => timerEnded(), remainingTime)
    }

    // const handleStop = () => {
    //     clearInterval(timerInterval);
    //     clearTimeout(timerTimeout);
    //     dispatch(handleStopTimer());

    // }

    const timerEnded = () => {
        clearInterval(timerInterval);
        const alarm = new Audio(alarmsound);
        alarm.play();
        dispatch(updateInterval());
        dispatch(setPomodoroTime());
        dispatch(setInitialClock());
        // dispatch(handleTimerEnded());
    }

    const handleNextInterval = () => {
        clearInterval(timerInterval);
        clearTimeout(timerTimeout);
        dispatch(updateInterval());
        dispatch(setPomodoroTime());
        dispatch(setInitialClock());
    }

    // useEffect(() => {

    //     dispatch(updateProgressBar());

    // }, [fixedDate])

    return (
        <div>
            <ComponentContainer>

                <PomodoroInterval>{actualInterval}</PomodoroInterval>

                <ClockContainer>{renderPomodoroTime(futureDate, fixedDate)}</ClockContainer>

                {/* {isTimerSet && <ProgressBar id='progressBar'>
                    <FillerBar id='filler' style={{ width: `${progressBar.filler}%`, transition: `width 100ms linear` }}></FillerBar>
                </ProgressBar>} */}

                <ContainerRow>

                    {!isTimeRunning && !isTimePaused && <Button onClick={() => handleStart()}>start</Button>}

                    {isTimeRunning && !isTimePaused && <Button onClick={() => handlePause()}>pause</Button>}

                    {!isTimeRunning && isTimePaused && <Button onClick={() => handlePlay()} >play</Button>}

                    <Button onClick={() => handleNextInterval()}>next</Button>

                </ContainerRow>

            </ComponentContainer>
        </div>
    )
}