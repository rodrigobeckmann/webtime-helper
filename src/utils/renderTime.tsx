const renderTime = (targetTime: number, startTime: number) => {

    const padZero = (num: number) => {
        return num.toString().padStart(2, '0');
    }

    const time = targetTime - startTime <= 0 ? 0 : targetTime - startTime;
    const hours = Math.floor(time / 3600000);
    const minutes = Math.floor((time - hours * 3600000) / 60000);
    const seconds = Math.ceil((time - hours * 3600000 - minutes * 60000) / 1000);

    return (
        <span>{padZero(hours)}:{padZero(minutes)}:{padZero(seconds)}</span>
    )

}

export default renderTime;