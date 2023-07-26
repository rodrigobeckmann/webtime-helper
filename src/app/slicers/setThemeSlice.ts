import { createSlice } from "@reduxjs/toolkit";

export interface SetThemeState {
    isDarkMode: boolean,
}

const initialState: SetThemeState = {
    isDarkMode: true,
}

export const setThemeSlice = createSlice({
    name: 'setTheme',
    initialState,
    reducers: {
        change: (state) => { state.isDarkMode = !state.isDarkMode },
    }
})

export const { change } = setThemeSlice.actions;

export default setThemeSlice.reducer;