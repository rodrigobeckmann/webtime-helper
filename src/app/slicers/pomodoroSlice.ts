import { createSlice } from "@reduxjs/toolkit";

const focus = 'Foco';
const shortBreak = 'Pausa Curta';
const longBreak = 'Pausa Longa';

export interface pomodoroState {
    actualInterval: string,
    stackedShortBreaks: number,
    shortBreak: number,
    longBreakInterval: number,
    longBreak: number,
    focus: number,
    fixedDate: number,
    futureDate: number,
    isTimeRunning: boolean,
    isTimePaused: boolean,
    remainingTime: number,
}

const initialState: pomodoroState = {
    actualInterval: focus,
    shortBreak: 5,
    stackedShortBreaks: 0,
    longBreakInterval: 3,
    longBreak: 15,
    focus: 25,
    fixedDate: Date.now(),
    futureDate: Date.now(),
    isTimeRunning: false,
    isTimePaused: false,
    remainingTime: 0,
}

export const pomodoroSlice = createSlice({
    name: 'pomodoro',
    initialState,
    reducers: {
        updateInterval: (state) => ({
            ...state, actualInterval: state.actualInterval === focus && state.stackedShortBreaks < state.longBreakInterval ?
                shortBreak : state.actualInterval === focus ? longBreak : focus,
            isTimeRunning: false,
            stackedShortBreaks: state.actualInterval === shortBreak && state.stackedShortBreaks < 3 ? state.stackedShortBreaks + 1 :
                state.actualInterval === focus ? state.stackedShortBreaks : 0,
        }),
        setPomodoroTime: (state) => {
            state.remainingTime = state.actualInterval === focus ? state.focus * 60 * 1000 :
                state.actualInterval === shortBreak ? state.shortBreak * 60 * 1000 :
                    state.longBreak * 60 * 1000
        },
        setInitialClock: (state) => ({ ...state, futureDate: Date.now() + state.remainingTime, fixedDate: Date.now() }),
        handleStartPomodoro: (state) => ({ ...state, fixedDate: Date.now(), futureDate: Date.now() + state.remainingTime, isTimeRunning: true }),
        updateFixedDate: (state) => ({ ...state, fixedDate: Date.now(), remainingTime: state.futureDate - Date.now() }),
        handleTimePause: (state) => ({ ...state, isTimePaused: true, isTimeRunning: false }),
        handleResumePomodoro: (state) => ({ ...state, isTimePaused: false, isTimeRunning: true, futureDate: Date.now() + state.remainingTime, fixedDate: Date.now() }),
    }
})

export const { handleStartPomodoro, updateFixedDate, handleTimePause, handleResumePomodoro, setPomodoroTime, updateInterval, setInitialClock } = pomodoroSlice.actions;

export default pomodoroSlice.reducer;