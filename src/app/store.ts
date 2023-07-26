import { configureStore } from "@reduxjs/toolkit";
import setThemeSlice from "./slicers/setThemeSlice";
import timerSlice from "./slicers/timerSlice";

export const store = configureStore({
    reducer: {
        setTheme: setThemeSlice,
        timer: timerSlice,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;