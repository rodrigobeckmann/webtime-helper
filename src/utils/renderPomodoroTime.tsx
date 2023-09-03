const renderTime = (targetTime: number, startTime: number) => {

    const padZero = (num: number) => {
        return num.toString().padStart(2, '0');
    }

    const time = targetTime - startTime <= 0 ? 0 : targetTime - startTime;
    const minutes = Math.floor(time / 60000);
    const seconds = Math.floor((time - minutes * 60000) / 1000);

    return (
        <span>{padZero(minutes)}:{padZero(seconds)}</span>
    )

}

export default renderTime;