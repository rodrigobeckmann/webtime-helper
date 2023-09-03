import { useEffect } from 'react'
import { ContainerRow, ClockContainer, Button, ComponentContainer } from '../styles';
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
        <ComponentContainer>
            <ClockContainer>{renderStopWatchTime(futureDate, fixedDate)}</ClockContainer>


            <ContainerRow>

                {!isTimerRunning && <Button onClick={() => handleStart()}>start</Button>}

                {isTimerRunning && <Button onClick={() => handleReset()}>pause</Button>}

                <Button onClick={() => handleStop()}>stop</Button>

            </ContainerRow>

        </ComponentContainer>
    );
}