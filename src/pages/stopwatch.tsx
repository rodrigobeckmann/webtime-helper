import { useState, useEffect } from 'react'
import { ContainerColumn, ContainerRow, ClockContainer } from '../styles';

let timerInterval: any = null;

export default function StopWatch() {
    const [fixedData, setFixedData] = useState(Date.now());
    const [futureData, setFutureData] = useState(Date.now());
    const [isTimerRuning, setIsTimerRuning] = useState(false);
    const [elapsedTime, setElapsedTime] = useState(3600000);

    useEffect(() => {
        setElapsedTime(futureData - fixedData);
    }, [futureData])

    const handleStart = () => {
        setFixedData(Date.now() - elapsedTime);
        setFutureData(Date.now());
        setIsTimerRuning(true);
        timerInterval = setInterval(() => {
            setFutureData(Date.now());
        }, 36)
    }

    const handleReset = () => {
        clearInterval(timerInterval);
        setIsTimerRuning(false);
    }

    const handleStop = () => {
        clearInterval(timerInterval);
        setIsTimerRuning(false);
        setFutureData(fixedData);
        setElapsedTime(0);
    }

    const padZero = (num: number, pad: number) => {
        return num.toString().padStart(pad, '0');
    }

    const renderTime = (targetTime: number, startTime: number) => {

        const time = targetTime - startTime <= 0 ? 0 : targetTime - startTime;
        const hours = Math.floor(time / 3600000);
        const minutes = Math.floor((time - hours * 3600000) / 60000);
        const seconds = Math.floor((time - hours * 3600000 - minutes * 60000) / 1000);
        const milliseconds = Math.floor((time - hours * 3600000 - minutes * 60000 - seconds * 1000));

        if (hours > 0) {
            return (
                <span>{padZero(hours, 2)}:{padZero(minutes, 2)}:{padZero(seconds, 2)}<span style={{ fontSize: '50px', letterSpacing: '-10px' }}>.{padZero(milliseconds, 3)}</span></span>
            )
        }


        return (
            <span>{padZero(minutes, 2)}:{padZero(seconds, 2)}<span style={{ fontSize: '50px', letterSpacing: '-10px' }}>.{padZero(milliseconds, 3)}</span></span>
        )

    }

    return (
        <ContainerColumn>
            <ClockContainer>{renderTime(futureData, fixedData)}</ClockContainer>

            <ContainerRow>

                {!isTimerRuning && <button onClick={() => handleStart()}>start</button>}

                {isTimerRuning && <button onClick={() => handleReset()}>pause</button>}

                <button onClick={() => handleStop()}>stop</button>

            </ContainerRow>

        </ContainerColumn>
    );
}