import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface TimerState {
    isModalOpen: boolean,
    isTimerRunning: boolean,
    isTimerSet: boolean,
    fixedDate: number,
    futureDate: number,
    timerClock: {
        hours: number,
        minutes: number,
        seconds: number,
        milliseconds: number,
    },
    progressBar: {
        filler: number,
    }
}

export const initialState: TimerState = {
    isModalOpen: false,
    isTimerRunning: false,
    isTimerSet: false,
    fixedDate: Date.now(),
    futureDate: Date.now(),
    timerClock: {
        hours: 0,
        minutes: 0,
        seconds: 0,
        milliseconds: 0,
    },
    progressBar: {
        filler: 0,
    }
}


export const timerSlice = createSlice({
    name: 'timer',
    initialState,
    reducers: {
        updateFixedDate: (state) => { state.fixedDate = Date.now() },
        updateTimerHours: (state, action: PayloadAction<number>) => ({
            ...state,
            timerClock: {
                ...state.timerClock,
                hours: !action.payload ? 0 : action.payload >= 0 ? action.payload : 0,
            }
        }),
        updateTimerMinutes: (state, action: PayloadAction<number>) => ({
            ...state,
            timerClock: {
                ...state.timerClock,
                minutes: !action.payload ? 0 : action.payload <= 59 && action.payload >= 0 ? action.payload : action.payload < 0 ? 0 : 59,
            }
        }),
        updateTimerSeconds: (state, action: PayloadAction<number>) => ({
            ...state,
            timerClock: {
                ...state.timerClock,
                seconds: !action.payload ? 0 : action.payload <= 59 && action.payload >= 0 ? action.payload : action.payload < 0 ? 0 : 59,
            }
        }),
        handleSetTime: (state) => ({ ...state, fixedDate: Date.now(), futureDate: Date.now() + state.timerClock.milliseconds, isTimerSet: true, isModalOpen: false }),
        handleStartTime: (state) => ({ ...state, fixedDate: Date.now(), futureDate: Date.now() + state.timerClock.milliseconds, isTimerRunning: true }),
        handleStopTimer: (state) => ({ ...state, isTimerRunning: false, futureDate: state.fixedDate, isTimerSet: false }),
        openModal: (state) => ({ ...state, isModalOpen: true, timerClock: initialState.timerClock }),
        handleTimerEnded: (state) => ({ ...state, isTimerSet: false, isTimerRunning: false }),
        closeModal: (state) => { state.isModalOpen = false },
        updateMilliseconds: (state) => { state.timerClock.milliseconds = (state.timerClock.hours * 3600000) + (state.timerClock.minutes * 60000) + (state.timerClock.seconds * 1000) },
        updateProgressBar: (state) => { state.progressBar.filler = ((state.fixedDate - state.futureDate) / state.timerClock.milliseconds * 100) + 100 },
    },
})


export const { updateFixedDate, updateTimerHours, updateTimerMinutes, updateTimerSeconds, handleSetTime, handleStartTime, handleStopTimer, openModal, handleTimerEnded, closeModal, updateMilliseconds, updateProgressBar } = timerSlice.actions;

export default timerSlice.reducer;