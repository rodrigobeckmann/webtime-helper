import { createSlice } from "@reduxjs/toolkit";

export interface SetThemeState {
    isDarkMode: boolean,
    isMenuShown: boolean,
}

const initialState: SetThemeState = {
    isDarkMode: false,
    isMenuShown: false,
}

export const setThemeSlice = createSlice({
    name: 'setTheme',
    initialState,
    reducers: {
        change: (state) => { state.isDarkMode = !state.isDarkMode },
        toggleMenu: (state) => { state.isMenuShown = !state.isMenuShown },
        toggleMenuOn: (state) => { state.isMenuShown = true },
        toggleMenuOff: (state) => { state.isMenuShown = false },
    }
})

export const { change, toggleMenu, toggleMenuOn, toggleMenuOff } = setThemeSlice.actions;

export default setThemeSlice.reducer;