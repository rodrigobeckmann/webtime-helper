import { createSlice } from "@reduxjs/toolkit";

export interface StopWatchState {
    isTimerRunning: boolean,
    fixedDate: number,
    futureDate: number,
    elapsedTime: number,
}

export const initialState: StopWatchState = {
    isTimerRunning: false,
    fixedDate: Date.now(),
    futureDate: Date.now(),
    elapsedTime: 0,
}


export const stopWatchSlice = createSlice({
    name: 'stopWatch',
    initialState,
    reducers: {
        updateFutureDate: (state) => { state.futureDate = Date.now() },
        handlePause: (state) => { state.isTimerRunning = false },
        handleStopStopWatch: (state) => ({ ...state, isTimerRunning: false, elapsedTime: 0, futureDate: state.fixedDate }),
        handleStartStopWatch: (state) => ({ ...state, futureDate: Date.now(), fixedDate: Date.now() - state.elapsedTime, isTimerRunning: true }),
        updateElapsedTime: (state) => { state.elapsedTime = state.futureDate - state.fixedDate },
    },
})


export const { handleStartStopWatch, updateFutureDate, handlePause, handleStopStopWatch, updateElapsedTime } = stopWatchSlice.actions;

export default stopWatchSlice.reducer;