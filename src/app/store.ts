import { configureStore } from "@reduxjs/toolkit";
import setThemeSlice from "./slicers/setThemeSlice";
import timerSlice from "./slicers/timerSlice";
import stopWatchSlice from "./slicers/stopWatchSlice";

export const store = configureStore({
    reducer: {
        setTheme: setThemeSlice,
        timer: timerSlice,
        stopWatch: stopWatchSlice,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;