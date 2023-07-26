import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface TimerState {
    isModalOpen: boolean,
    isTimerRunning: boolean,
    isTimerSet: boolean,
    fixedDate: number,
    futureDate: number,
}

export const initialState: TimerState = {
    isModalOpen: false,
    isTimerRunning: false,
    isTimerSet: false,
    fixedDate: Date.now(),
    futureDate: Date.now(),
}

export const timerSlice = createSlice({
    name: 'timer',
    initialState,
    reducers: {
        modalStateChange: (state) => { state.isModalOpen = !state.isModalOpen },
        timerRuningStateChange: (state) => { state.isTimerRunning = !state.isTimerRunning },
        timerSetStateChange: (state) => { state.isTimerSet = !state.isTimerSet },
        incrementFutureDate: (state, action: PayloadAction<number>) => { state.futureDate = Date.now() + action.payload },
        updateFixedDate: (state) => { state.fixedDate = Date.now() },
        stopTimer: (state) => { state.futureDate = state.fixedDate },
    }
})

export const { modalStateChange, timerRuningStateChange, timerSetStateChange, incrementFutureDate, updateFixedDate, stopTimer } = timerSlice.actions;

export default timerSlice.reducer;