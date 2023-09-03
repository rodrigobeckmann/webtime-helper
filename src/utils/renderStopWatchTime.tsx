import { MillisecondsContainer } from "../styles";

const renderStopWatchTime = (targetTime: number, startTime: number) => {

    const padZero = (num: number, pad: number) => {
        return num.toString().padStart(pad, '0');
    }

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
        <span>{padZero(minutes, 2)}:{padZero(seconds, 2)}<MillisecondsContainer>.{padZero(milliseconds, 3)}</MillisecondsContainer></span>
    )

}

export default renderStopWatchTime;