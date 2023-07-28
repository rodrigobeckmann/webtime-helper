import { useEffect } from 'react'
import { ContainerColumn, ContainerRow, ClockContainer } from '../styles';
import { handleStartStopWatch, updateFutureDate, handlePause, handleStopStopWatch, updateElapsedTime } from '../app/slicers/stopWatchSlice';
import { useAppDispatch, useAppSelector } from '../app/hooks';
import renderStopWatchTime from '../utils/renderStopWatchTime';

let timerInterval: any = null;

export default function StopWatch() {


    const dispatch = useAppDispatch();

    const { isTimerRunning, futureDate, fixedDate } = useAppSelector((state) => state.stopWatch);

    useEffect(() => {
        dispatch(updateElapsedTime());
    }, [futureDate])

    const handleStart = () => {
        dispatch(handleStartStopWatch());
        timerInterval = setInterval(() => {
            dispatch(updateFutureDate());
        }, 36)
    }

    const handleReset = () => {
        clearInterval(timerInterval);
        dispatch(handlePause())
    }

    const handleStop = () => {
        clearInterval(timerInterval);
        dispatch(handleStopStopWatch())
    }

    return (
        <ContainerColumn>
            <ClockContainer>{renderStopWatchTime(futureDate, fixedDate)}</ClockContainer>

            <ContainerRow>

                {!isTimerRunning && <button onClick={() => handleStart()}>start</button>}

                {isTimerRunning && <button onClick={() => handleReset()}>pause</button>}

                <button onClick={() => handleStop()}>stop</button>

            </ContainerRow>

        </ContainerColumn>
    );
}